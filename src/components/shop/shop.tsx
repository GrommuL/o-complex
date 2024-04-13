'use client'

import { useEffect, useState } from 'react'

import { ShoppingCart } from '@/components/shopping-cart'
import { ProductList } from '@/components/product-list'
import { LoadMoreProducts } from '@/components/load-more-products'

import { fetchProducts } from '@/services/products/fetch-products'

import type { Product } from '@/types/product-type'
import type { CartItem } from '@/types/cart-item-type'

import styles from './shop.module.css'

export const Shop = () => {
	const [cartItems, setCartItems] = useState<CartItem[]>(() => {
		if (typeof window !== 'undefined') {
			const cartData = localStorage.getItem('cart')
			return cartData ? JSON.parse(cartData) : []
		}
		return []
	})
	const [products, setProducts] = useState<Product[]>([])
	const [totalProducts, setTotalProducts] = useState(0)

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartItems))
	}, [cartItems])

	const addToCart = (id: number) => {
		setCartItems((prevCart) => [...prevCart, { id, quantity: 1 }])
	}

	const increaseCartItemQuantity = (id: number) => {
		setCartItems((prevCart) => {
			const existingItemIndex = prevCart.findIndex((item) => item.id === id)
			const updatedCart = [...prevCart]
			updatedCart[existingItemIndex] = {
				...updatedCart[existingItemIndex],
				quantity: updatedCart[existingItemIndex].quantity + 1
			}
			return updatedCart
		})
	}

	const decreaseCartItemQuantity = (id: number) => {
		setCartItems((prevCart) => {
			const existingItemIndex = prevCart.findIndex((item) => item.id === id)

			if (prevCart[existingItemIndex]?.quantity === 1) {
				return prevCart.filter((cartItem) => cartItem.id !== id)
			}

			if (existingItemIndex !== -1) {
				const updatedCart = [...prevCart]
				updatedCart[existingItemIndex] = {
					...updatedCart[existingItemIndex],
					quantity: updatedCart[existingItemIndex].quantity - 1
				}

				return updatedCart
			} else {
				return [...prevCart, { id, quantity: 1 }]
			}
		})
	}

	useEffect(() => {
		const getProducts = async () => {
			const fetchedProducts = await fetchProducts(1)

			if (fetchedProducts) {
				setProducts([...products, ...fetchedProducts.products])
				setTotalProducts(fetchedProducts.total)
			} else {
				setProducts([])
				setTotalProducts(0)
			}
		}

		getProducts()
	}, [])

	return (
		<section className={styles.shop}>
			<h2 className='visually-hidden'>Магазин товаров</h2>
			<ShoppingCart cartItems={cartItems} products={products} setCartItems={setCartItems} />
			<ProductList
				products={products}
				setCartItems={setCartItems}
				cartItems={cartItems}
				addToCart={addToCart}
				decreaseCartItemQuantity={decreaseCartItemQuantity}
				increaseCartItemQuantity={increaseCartItemQuantity}
			/>
			<LoadMoreProducts
				totalProducts={totalProducts}
				products={products}
				setProducts={setProducts}
				cartItem={cartItems}
				setCartItem={setCartItems}
				addToCart={addToCart}
				decreaseCartItemQuantity={decreaseCartItemQuantity}
				increaseCartItemQuantity={increaseCartItemQuantity}
			/>
		</section>
	)
}
