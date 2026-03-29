'use server'
import { revalidatePath } from 'next/cache'
import { createClient } from '@supabase/supabase-js'
import type { Database, Link, LinkWithClicks } from '@/lib/supabase/database.types'

// ── Service client (bypasses RLS) ─────────────────────────────────────────
function serviceClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

// ── Server Actions ────────────────────────────────────────────────────────
async function createLink(formData: FormData) {
  'use server'
  const code        = (formData.get('code') as string | null)?.trim().toLowerCase() ?? ''
  const destination = (formData.get('destination') as string | null)?.trim() ?? ''
  const label       = (formData.get('label') as string | null)?.trim() ?? ''

  if (!code || !destination) return

  if (!/^[a-zA-Z0-9_-]{2,50}$/.test(code)) return

  let destUrl: URL
  try {
    destUrl = new URL(destination)
    if (!['http:', 'https:'].includes(destUrl.protocol)) return
  } catch { return }

  await serviceClient()
    .from('links')
    .insert({ code, destination: destUrl.toString(), label })

  revalidatePath('/admin/links')
}

async function deleteLink(formData: FormData) {
  'use server'
  const id = formData.get('id') as string | null
  if (!id) return
  await serviceClient().from('links').delete().eq('id', id)
  revalidatePath('/admin/links')
}

// ── Page ──────────────────────────────────────────────────────────────────
export default async function AdminLinksPage() {
  const supabase = serviceClient()

  // Fetch links
  const { data: links } = await supabase
    .from('links')
    .select('*')
    .order('created_at', { ascending: false })

  // Fetch click counts per link (match on code directly)
  const typedLinks = (links ?? []) as Link[]
  const withCounts: LinkWithClicks[] = await Promise.all(
    typedLinks.map(async (link): Promise<LinkWithClicks> => {
      const { count } = await supabase
        .from('link_clicks')
        .select('*', { count: 'exact', head: true })
        .eq('code', link.code)
      return { ...link, click_count: count ?? 0 }
    })
  )

  // Fetch recent 10 clicks across all links
  const { data: recentClicks } = await supabase
    .from('link_clicks')
    .select('id, code, ip_address, user_agent, clicked_at')
    .order('clicked_at', { ascending: false })
    .limit(10)

  // Stats
  const totalLinks  = withCounts.length
  const totalClicks = withCounts.reduce((s, l) => s + l.click_count, 0)
  const topLink     = [...withCounts].sort((a, b) => b.click_count - a.click_count)[0]

  // No lookup needed — code is stored directly on each click

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://exampasspro.com'

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-xl font-black text-slate-100">Link Analytics</h1>
        <p className="text-slate-500 text-sm mt-1">Track redirect links and visitor clicks</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Total Links</div>
          <div className="text-3xl font-black text-sky-400">{totalLinks}</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Total Clicks</div>
          <div className="text-3xl font-black text-emerald-400">{totalClicks.toLocaleString()}</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Most Clicked</div>
          {topLink ? (
            <>
              <div className="text-xl font-black text-violet-400">/{topLink.code}</div>
              <div className="text-xs text-slate-500 mt-1">{topLink.click_count.toLocaleString()} clicks</div>
            </>
          ) : (
            <div className="text-slate-600 text-sm">—</div>
          )}
        </div>
      </div>

      {/* Create Link Form */}
      <div>
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Create New Link</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <form action={createLink} className="flex flex-wrap gap-3">
            <input
              name="code"
              required
              placeholder="short-code"
              pattern="[a-zA-Z0-9_\-]{2,50}"
              title="2–50 characters, letters/numbers/dashes only"
              className="flex-1 min-w-32 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 font-mono"
            />
            <input
              name="destination"
              required
              type="url"
              placeholder="https://destination.com/page"
              className="flex-[3] min-w-64 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
            <input
              name="label"
              placeholder="Label (optional)"
              className="flex-[2] min-w-40 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-500 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              + Create
            </button>
          </form>
          <p className="text-xs text-slate-600 mt-2">
            Short link format: <span className="text-slate-400 font-mono">{baseUrl}/&#123;code&#125;</span>
          </p>
        </div>
      </div>

      {/* Links Table */}
      <div>
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
          All Links ({totalLinks})
        </h2>
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          {withCounts.length === 0 ? (
            <div className="px-4 py-10 text-center text-slate-500 text-sm">
              No links yet. Create your first one above.
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Code</th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Label</th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Destination</th>
                  <th className="text-center px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Clicks</th>
                  <th className="text-right px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Created</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody>
                {withCounts.map(link => (
                  <tr key={link.id} className="border-b border-slate-800 last:border-0 hover:bg-slate-800/40 transition-colors">
                    <td className="px-4 py-3">
                      <a
                        href={`${baseUrl}/${link.code}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sky-400 hover:text-sky-300 font-bold text-sm"
                      >
                        /{link.code}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-slate-400 text-sm">
                      {link.label || <span className="text-slate-600 italic">—</span>}
                    </td>
                    <td className="px-4 py-3 max-w-xs">
                      <span
                        className="text-slate-400 text-xs truncate block"
                        title={link.destination}
                      >
                        {link.destination.length > 55
                          ? link.destination.slice(0, 55) + '…'
                          : link.destination}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-lg font-black ${
                        link.click_count > 100 ? 'text-emerald-400' :
                        link.click_count > 10  ? 'text-sky-400'     :
                        'text-slate-300'
                      }`}>
                        {link.click_count.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-xs text-slate-500 whitespace-nowrap">
                      {new Date(link.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <form action={deleteLink}>
                        <input type="hidden" name="id" value={link.id} />
                        <button
                          type="submit"
                          className="text-xs text-red-500 hover:text-red-400 font-medium transition-colors"
                          onClick={(e) => {
                            if (!confirm(`Delete /${link.code}? This will also delete all ${link.click_count} click records.`)) {
                              e.preventDefault()
                            }
                          }}
                        >
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Recent Clicks Log */}
      {(recentClicks ?? []).length > 0 && (
        <div>
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
            Recent Clicks (last 10)
          </h2>
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Link</th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">IP Address</th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">User Agent</th>
                  <th className="text-right px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Time</th>
                </tr>
              </thead>
              <tbody>
                {(recentClicks ?? []).map(click => (
                  <tr key={click.id} className="border-b border-slate-800 last:border-0 hover:bg-slate-800/40 transition-colors">
                    <td className="px-4 py-3">
                      <span className="font-mono text-sky-400 text-xs font-bold">
                        /{click.code}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-slate-300">
                      {click.ip_address ?? '—'}
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500 max-w-xs">
                      <span
                        className="truncate block"
                        title={click.user_agent ?? ''}
                      >
                        {(click.user_agent ?? '—').slice(0, 60)}
                        {(click.user_agent?.length ?? 0) > 60 ? '…' : ''}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-xs text-slate-500 whitespace-nowrap">
                      {new Date(click.clicked_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  )
}
