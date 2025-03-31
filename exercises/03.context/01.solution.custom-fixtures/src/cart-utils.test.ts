import { test } from '../test-extend'
import { getTotalPrice } from './cart-utils'

test('returns the total price for the cart', ({ createMockCart }) => {
	const cart = createMockCart([
		{ price: 5, quantity: 10 },
		{ price: 8, quantity: 4 },
	])

	expect(getTotalPrice(cart)).toBe(82)
})
