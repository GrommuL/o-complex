import type { Product } from '@/types/product-type'

export type ProductsResponse = {
	page: number
	amount: number
	total: number
	products: Product[]
}
