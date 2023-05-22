import { customMediaQuery, respondTo } from './mediaQuerys'

describe('customMediaQuery', () => {
  test('returns media query with the correct maxWidth', () => {
    expect(customMediaQuery(1920)).toBe('@media (max-width: 1920px)')
    expect(customMediaQuery(1536)).toBe('@media (max-width: 1536px)')
    expect(customMediaQuery(1440)).toBe('@media (max-width: 1440px)')
  })
})

describe('respondTo', () => {
  test('returns the correct media query based on the key', () => {
    const keys = Object.keys(respondTo) as Array<keyof typeof respondTo>

    keys.forEach((key) => {
      const expectedQuery = respondTo[key]

      expect(respondTo[key]).toBe(expectedQuery)
    })
  })
})
