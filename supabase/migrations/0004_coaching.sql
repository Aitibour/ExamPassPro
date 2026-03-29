-- coaching_bookings table
create table if not exists public.coaching_bookings (
  id            uuid primary key default gen_random_uuid(),
  user_email    text not null,
  user_name     text not null,
  package_id    text not null,
  package_name  text not null,
  slot_date     date not null,
  slot_time     text not null,
  stripe_session_id text unique,
  status        text not null default 'pending',  -- pending | paid | cancelled
  created_at    timestamptz not null default now()
);

-- Only admins / service role can read/write via RLS
alter table public.coaching_bookings enable row level security;

-- Service role bypasses RLS automatically; no extra policy needed for webhook inserts.
-- Prevent public reads
create policy "no public access" on public.coaching_bookings
  for all using (false);
