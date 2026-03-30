import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'ExamPassPro - IT Certification Exam Prep'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #0ea5e9 0%, #0c4a6e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          flexDirection: 'column',
          gap: '40px',
          padding: '60px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '72px', fontWeight: '900' }}>ExamPassPro</div>
        <div style={{ fontSize: '48px', fontWeight: '600', opacity: 0.95 }}>
          Pass Your IT Certification First Try
        </div>
        <div style={{ fontSize: '32px', opacity: 0.85 }}>
          Real Exam Questions • Timed Exams • 100% Pass Guarantee
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
