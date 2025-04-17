import { Measurement } from './src/measurement'

expect.addEqualityTesters([
	function measurementTester(received, expected) {
		if (!(expected instanceof Measurement)) {
			console.log(expected)
			throw new Error(
				'Failed to compare Measurement: expected is not a Measurement',
			)
		}

		if (!(received instanceof Measurement)) {
			return false
		}

		return expected.equals(received)
	},
])
