import { formatAmount } from '@utils/stringFormattingUtils'

test('formats a number with 2 decimal places', () => {
  expect(formatAmount(100)).toBe('100.00')
  expect(formatAmount(123.4)).toBe('123.40')
})

test('rounds properly', () => {
  expect(formatAmount(123.456)).toBe('123.46')
  expect(formatAmount(123.459)).toBe('123.46')
  expect(formatAmount(123.461)).toBe('123.46')
})

test('handles negative numbers', () => {
  expect(formatAmount(-100)).toBe('-100.00')
  expect(formatAmount(-123.4)).toBe('-123.40')
})

test('handles zero', () => {
  expect(formatAmount(0)).toBe('0.00')
})

test('handles large numbers', () => {
  expect(formatAmount(10000000)).toBe('10,000,000.00')
})
