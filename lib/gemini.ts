import { GoogleGenerativeAI } from '@google/generative-ai'

let _genAI: GoogleGenerativeAI | null = null

export function getGemini() {
  if (!_genAI) {
    _genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? 'placeholder')
  }
  return _genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
}
