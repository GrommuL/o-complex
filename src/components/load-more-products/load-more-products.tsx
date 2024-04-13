'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { ProductList } from '@/components/product-list'
import { Loader } from '@/components/loader'
import { Product } from '@/types/product-type'
import { CartItem } from '@/types/cart-item-type'
import { fetchProducts } from '@/services/products/fetch-products'

import styles from './load-more-products.module.css'

type LoadMoreProductsProps = {
	totalProducts: number
	products: Product[]
	setProducts: Dispatch<SetStateAction<Product[]>>
	cartItem: CartItem[]
	setCartItem: Dispatch<SetStateAction<CartItem[]>>
	addToCart: (id: number) => void
	decreaseCartItemQuantity: (id: number) => void
	increaseCartItemQuantity: (id: number) => void
}

let page = 2

export const LoadMoreProducts = ({
	totalProducts,
	products,
	setProducts,
	cartItem,
	setCartItem,
	addToCart,
	increaseCartItemQuantity,
	decreaseCartItemQuantity
}: LoadMoreProductsProps) => {
	const { ref, inView } = useInView()

	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const moreProducts = async (pageProp: number) => {
			const response = await fetchProducts(pageProp)
			if (!response) return

			setProducts([...products, ...response.products])
			page++
		}
		if (inView && products.length <= totalProducts - 21) {
			setIsLoading(true)
			const delay = 500

			const timeoutId = setTimeout(() => {
				moreProducts(page)

				setIsLoading(false)
			}, delay)

			return () => clearTimeout(timeoutId)
		}
	}, [inView, products, isLoading, totalProducts])

	return (
		<>
			<ProductList
				products={products}
				cartItems={cartItem}
				setCartItems={setCartItem}
				addToCart={addToCart}
				decreaseCartItemQuantity={decreaseCartItemQuantity}
				increaseCartItemQuantity={increaseCartItemQuantity}
			/>
			<section ref={ref} className={styles.load}>
				<div>{inView && isLoading && <Loader />}</div>
			</section>
		</>
	)
}
