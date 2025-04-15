import { fn } from './fn'

test('returns "great" if given a number greater than 10', () => {
	expect(fn(42)).toBe('great')
})
