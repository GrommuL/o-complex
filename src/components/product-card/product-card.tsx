'use client'

import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'

import { Button } from '@/components/ui/button'

import type { Product } from '@/types/product-type'
import type { CartItem } from '@/types/cart-item-type'

import styles from './product-card.module.css'

type ProductProps = {
	product: Product
	cartItems: CartItem[]
	setCartItems: Dispatch<SetStateAction<CartItem[]>>
	addToCart: (id: number) => void
	decreaseCartItemQuantity: (id: number) => void
	increaseCartItemQuantity: (id: number) => void
}

export const ProductCard = ({ product, addToCart, increaseCartItemQuantity, decreaseCartItemQuantity, cartItems }: ProductProps) => {
	const { title, image_url, description, price, id } = product
	const currentCartItem = cartItems.find((cartItem) => cartItem.id === id)

	const addToCartProduct = (id: number) => () => addToCart(id)
	const increaseProductQuantity = (id: number) => () => increaseCartItemQuantity(id)
	const decreaseProductQuantity = (id: number) => () => decreaseCartItemQuantity(id)

	return (
		<div className={styles.card}>
			<Image className={styles['card_image']} src={image_url} alt={title} width={280} height={360} />
			<h4 className={styles['card_title']}>{JSON.stringify(title)}</h4>
			<p className={styles['card_description']}>{description}</p>
			<div className={styles['card_info']}>
				<span className={styles['card_price']}>{`цена: ${price}₽`}</span>
				{!currentCartItem && (
					<Button size='large' onClick={addToCartProduct(id)}>
						купить
					</Button>
				)}
				{currentCartItem && (
					<div className={styles['card_actions']}>
						<Button size='small' onClick={decreaseProductQuantity(id)}>
							-
						</Button>
						<span className={styles['card_quantity']}>{currentCartItem?.quantity}</span>
						<Button size='small' onClick={increaseProductQuantity(id)}>
							+
						</Button>
					</div>
				)}
			</div>
		</div>
	)
}
