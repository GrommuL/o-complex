import { Order, OrderResponse } from '@/types/order-type'

export const sendOrder = async (order: Order) => {
	try {
		const response = await fetch('http://o-complex.com:1337/order', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(order)
		})

		if (!response.ok) {
			throw new Error('Ошибка при отправке заказа')
		}

		const responseData: OrderResponse = await response.json()

		return responseData
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message)
		} else {
			console.log(error)
		}
	}
}
