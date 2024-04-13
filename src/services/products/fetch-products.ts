'use server'

import { ProductsResponse } from '@/types/products-response-type'

export const fetchProducts = async (page: number = 1): Promise<ProductsResponse | undefined> => {
	try {
		const response = await fetch(`http://o-complex.com:1337/products?page=${page}&page_size=21`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			cache: 'no-store'
		})

		if (!response.ok) throw new Error('Ошибка при получении товаров')

		const responseData: ProductsResponse = await response.json()
		return responseData
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message)
		} else {
			console.log(error)
		}
	}
}
