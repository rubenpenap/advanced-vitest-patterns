import { test as testBase } from 'vitest'
import { faker } from '@faker-js/faker'
import type { Cart, CartItem } from './src/cart-utils'

interface Fixtures {
	createMockCart: (items: Array<Partial<CartItem>>) => Cart
}

export const test = testBase.extend<Fixtures>({
	async createMockCart({}, use) {
		await use((items) => {
			return items.map((item) => ({
				id: faker.string.ulid(),
				name: faker.commerce.productName(),
				price: faker.number.int({ min: 1, max: 25 }),
				quantity: faker.number.int({ min: 1, max: 10 }),
				...item,
			}))
		})
	},
})
