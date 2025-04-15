import { slugify } from './slugify'

test('returns a slugified string', () => {
	expect(slugify('hello world')).toBe('hello-world')
})
