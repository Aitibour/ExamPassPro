import { getGemini } from '@/lib/gemini'
import { createClient } from '@/lib/supabase/server'

export const runtime = 'edge'

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return new Response('Unauthorized', { status: 401 })

  const { messages, context } = await req.json()

  // Input guards — prevent oversized payloads
  if (!Array.isArray(messages) || messages.length > 50) {
    return new Response('Invalid request', { status: 400 })
  }
  const lastMsg = messages[messages.length - 1]
  if (!lastMsg?.content || typeof lastMsg.content !== 'string') {
    return new Response('Invalid request', { status: 400 })
  }
  if (lastMsg.content.length > 4000) {
    return new Response('Message too long', { status: 400 })
  }

  const model = getGemini()

  const systemPrompt = context
    ? `You are an expert IT certification study assistant for ExamPassPro.

The student just completed an exam with these results:
- Score: ${context.score}%
- Passed: ${context.passed ? 'Yes' : 'No'}
- Weak domains: ${context.weakDomains?.join(', ') ?? 'N/A'}
- Wrong answers (${context.wrongCount ?? 0} total): questions they struggled with are related to: ${context.wrongDomains?.join(', ') ?? 'various topics'}

Your role:
1. Help the student understand concepts from the exam material
2. Explain wrong answers when asked
3. Give targeted study tips for weak domains
4. Answer questions about the certification topics
5. Do NOT reveal answers to upcoming exam questions

Be concise, encouraging, and educational.`
    : `You are an expert IT certification study assistant. Help students understand exam concepts, explain difficult topics, and provide study guidance. Be concise and educational.`

  const chat = model.startChat({
    history: messages.slice(0, -1).map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    })),
    systemInstruction: systemPrompt,
  })

  const result = await chat.sendMessageStream(lastMsg.content)

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder()
      for await (const chunk of result.stream) {
        const text = chunk.text()
        if (text) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`))
        }
      }
      controller.enqueue(encoder.encode('data: [DONE]\n\n'))
      controller.close()
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  })
}
