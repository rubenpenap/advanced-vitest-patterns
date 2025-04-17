export type Cart = Array<CartItem>

export interface CartItem {
	id: string
	name: string
	price: number
	quantity: number
}

export function getTotalPrice(cart: Cart): number {
	return cart.reduce((total, item) => {
		return total + item.price * item.quantity
	}, 0)
}
