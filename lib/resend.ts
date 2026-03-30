import { Resend } from 'resend'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY ?? 'placeholder')
}

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? 'admin@exampasspro.com'
const FROM_EMAIL  = process.env.FROM_EMAIL  ?? 'bookings@exampasspro.com'

interface BookingInfo {
  clientName: string
  clientEmail: string
  packageName: string
  slotDate: string   // e.g. "2026-04-10"
  slotTime: string   // e.g. "14:00"
}

function formatSlot(date: string, time: string) {
  const [y, m, d] = date.split('-').map(Number)
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const hour = parseInt(time.split(':')[0], 10)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const h12  = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
  return `${months[m - 1]} ${d}, ${y} at ${h12}:00 ${ampm} EST`
}

export async function sendBookingConfirmation(info: BookingInfo) {
  const slot = formatSlot(info.slotDate, info.slotTime)
  await getResend().emails.send({
    from: FROM_EMAIL,
    to: info.clientEmail,
    subject: `Your coaching session is confirmed — ${slot}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1e293b">
        <h2 style="color:#0ea5e9">Booking Confirmed!</h2>
        <p>Hi ${info.clientName},</p>
        <p>Your <strong>${info.packageName}</strong> coaching session has been confirmed.</p>
        <table style="background:#f0f9ff;border-radius:8px;padding:16px;width:100%;border-collapse:collapse">
          <tr><td style="padding:4px 8px;font-weight:bold">Date &amp; Time</td><td>${slot}</td></tr>
          <tr><td style="padding:4px 8px;font-weight:bold">Package</td><td>${info.packageName}</td></tr>
          <tr><td style="padding:4px 8px;font-weight:bold">Platform</td><td>Google Meet (link sent 30 min before)</td></tr>
        </table>
        <p style="margin-top:20px">If you need to reschedule, reply to this email at least 24 hours in advance.</p>
        <p>See you soon!<br><strong>The ExamPassPro Team</strong></p>
      </div>
    `,
  })
}

export async function sendBookingNotification(info: BookingInfo) {
  const slot = formatSlot(info.slotDate, info.slotTime)
  await getResend().emails.send({
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    subject: `New coaching booking — ${info.clientName} (${slot})`,
    html: `
      <div style="font-family:sans-serif;color:#1e293b">
        <h2>New Coaching Booking</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:6px 12px;font-weight:bold">Client</td><td>${info.clientName}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Email</td><td>${info.clientEmail}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Package</td><td>${info.packageName}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Date &amp; Time</td><td>${slot}</td></tr>
        </table>
      </div>
    `,
  })
}

interface PlanPurchaseInfo {
  email: string
  name: string
  planLabel: string // e.g. "Free", "Core", "Pro", "Elite"
  planFeatures?: string[] // list of plan features
  loginUrl: string
}

export async function sendPlanConfirmationEmail(info: PlanPurchaseInfo) {
  const featuresList = info.planFeatures
    ? info.planFeatures
        .map(f => `<li style="margin:6px 0;color:#475569">${f}</li>`)
        .join('')
    : ''

  await getResend().emails.send({
    from: FROM_EMAIL,
    to: info.email,
    subject: `Welcome to ExamPassPro ${info.planLabel} — Your access is ready!`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1e293b">
        <h2 style="color:#0ea5e9;margin:0 0 20px 0">🎉 Payment Successful!</h2>

        <p>Hi ${info.name},</p>

        <p>Thank you for your purchase! Your <strong>${info.planLabel}</strong> plan is now active and ready to use.</p>

        ${
          featuresList
            ? `
        <div style="background:#f0f9ff;border-radius:8px;padding:16px;margin:20px 0;border-left:4px solid #0ea5e9">
          <p style="margin:0 0 12px 0;font-weight:bold;color:#0c4a6e">What's Included:</p>
          <ul style="list-style:none;padding:0;margin:0">
            ${featuresList}
          </ul>
        </div>
        `
            : ''
        }

        <p style="margin:24px 0 16px 0">
          <a href="${info.loginUrl}" style="display:inline-block;background:#0ea5e9;color:white;padding:12px 32px;border-radius:6px;text-decoration:none;font-weight:bold">
            Sign In to Get Started →
          </a>
        </p>

        <p style="margin-top:32px;padding-top:20px;border-top:1px solid #e2e8f0;font-size:13px;color:#64748b">
          If you have any questions, feel free to reply to this email or visit our support page.<br>
          <strong>The ExamPassPro Team</strong>
        </p>
      </div>
    `,
  })
}
