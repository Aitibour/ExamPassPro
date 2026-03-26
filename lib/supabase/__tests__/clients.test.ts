jest.mock('stripe', () => {
  return jest.fn().mockImplementation(() => ({ _mocked: true }))
})

describe('Supabase clients', () => {
  it('createClient (browser) does not throw without env vars', () => {
    expect(() => {
      const { createClient } = require('../client')
      createClient()
    }).not.toThrow()
  })
})

describe('getStripe', () => {
  it('returns same instance on repeated calls (lazy singleton)', () => {
    jest.resetModules()
    // Re-mock after reset
    jest.mock('stripe', () => jest.fn().mockImplementation(() => ({ _mocked: true })))
    const { getStripe } = require('../../stripe')
    const a = getStripe()
    const b = getStripe()
    expect(a).toBe(b)
  })
})
