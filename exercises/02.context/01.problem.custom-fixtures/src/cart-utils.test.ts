// 🐨 Import the custom `test` function from `../test-extend`.
// 💰 import { this } from 'that'
import { getTotalPrice } from './cart-utils'

test('returns the total price for the cart', () => {
	// 💰 ({ createMockCart }) => {} // Inside that object, access your newly created fixture `createMockCart`. // 🐨 Destructure the first argument of the `test()` function.
	// 🐨 Declare a new variable called `cart` and assign it the result
	// of calling the `createMockCart()` fixture.
	// 💰 const cart = yourFixture(args)
	//
	// 🐨 Provide a fixed set of cart items to your mock cart.
	// This way, the state of the cart item is fixed to this test case,
	// guaranteeing explicit and reliable test results.
	// 💰 [{ price: 5, quantity: 10 }, { price: 8, quantity: 4 }]
	//
	// 🐨 Finally, write an assertion that calling `getTotalPrice()` with your
	// mock `cart` as an argument returns the correct total price.
	// 💰 expect(actual).toBe(expected)
})
