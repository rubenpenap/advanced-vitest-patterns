import { Measurement } from './src/measurement'

// 🐨 Extend default equality testers in Vitest by calling
// `expect.addEqualityTesters` function and passing it an array as an argument.
// 💰 expect.addEqualityTesters([])

// 🐨 In the list of custom equality testers, declare a new function
// called `measurementTester`. It accepts two parameters: `received` and `expected`.
// 💰 function measurementTester(received, expected) {}

// 🐨 First, check that the `expected` argument is an instance of the `Measurement` class.
// This makes sure that you provide the equality tester with the correct input.
// If `expected` is not an instance of `Measurement`, print the argument to the console
// and throw a developer-friendly error.
// 💰 a instanceof Measurement
// 💰 console.log(expected
// 💰 throw new Error('Failed to compare Measurement: expected is not a Measurement')

// 🐨 Next, add a similar instance check for the `received` argument.
// In this case, if `received` is not an instance of `Measurement`, simply
// return false. This will fail the equality comparison, which is what you want.

// 🐨 Finally, at this point, both `expected` and `received` are measurements,
// which means you can use the `.equals()` method of the `Measurement` class
// to compare two measurements. Return the result of that comparison from the
// equality tester function.
// 💰 expected.equals(received)
