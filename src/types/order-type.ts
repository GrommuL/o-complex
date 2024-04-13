import { CartItem } from './cart-item-type'

export type Order = {
	phone: string
	cart: CartItem[]
}

export type OrderResponse = {
	success: 0 | 1
	error?: string
}
