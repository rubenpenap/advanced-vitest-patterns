import { expect } from 'vitest'
import type { Schema } from 'zod'

interface CustomMatchers<MatcherResult = any> {
	toMatchSchema: (schema: Schema) => MatcherResult
}

declare module 'vitest' {
	interface Matchers<T> extends CustomMatchers<T> {}
}

expect.extend({
	toMatchSchema(received, expected) {
		const result = expected.safeParse(received)

		if (!result.success) {
			return {
				pass: false,
				message: () => 'Does not match the schema',
			}
		}

		return {
			pass: true,
			message: () => 'Matches the schema',
		}
	},
})
