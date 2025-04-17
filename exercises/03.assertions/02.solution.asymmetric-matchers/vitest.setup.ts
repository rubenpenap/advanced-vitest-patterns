import 'vitest'
import type { Schema } from 'zod'

interface CustomMatchers<MatcherResult = any> {
	toMatchSchema: (schema: Schema) => MatcherResult
}

declare module 'vitest' {
	interface Assertion<T = any> extends CustomMatchers<T> {}
	interface MatchersDeclaration extends CustomMatchers {}

	// Extend this interface to make your assertion asymmetric!
	interface AsymmetricMatchersContaining extends CustomMatchers {}
}

expect.extend({
	toMatchSchema(received, expected) {
		const result = expected.safeParse(received)

		if (!result.success) {
			return {
				pass: false,
				message: () => 'Does not match the schema',
				actual: this.utils.printReceived(received),
				expected: result.error.format(),
			}
		}

		return {
			pass: true,
			message: () => 'Matches the schema',
			actual: this.utils.printReceived(received),
		}
	},
})
