import { Measurement } from './src/measurement'

expect.addEqualityTesters([
	function someTester(received, expected) {
		if (expected instanceof Measurement && received instanceof Measurement) {
			return expected.equals(received)
		}

		if (expected instanceof Measurement && !(received instanceof Measurement)) {
			return false
		}
	},
])
