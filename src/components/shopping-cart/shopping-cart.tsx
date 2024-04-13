'use client'

import { Dispatch, FormEvent, SetStateAction, useState } from 'react'

import { Button } from '@/components/ui/button'
import { PhoneInput } from '@/components/ui/phone-input'
import { Popup } from '@/components/popup'

import type { CartItem } from '@/types/cart-item-type'
import type { Product } from '@/types/product-type'

import { sendOrder } from '@/services/order/send-order'
import styles from './shopping-cart.module.css'

type ShoppingCart = {
	cartItems: CartItem[]
	products: Product[]
	setCartItems: Dispatch<SetStateAction<CartItem[]>>
}

export const ShoppingCart = ({ cartItems, products, setCartItems }: ShoppingCart) => {
	const [open, setOpen] = useState(false)

	const closeModal = () => {
		setOpen(false)
	}

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		setOpen(false)

		const cartData = localStorage.getItem('cart')

		const form = event.target as HTMLFormElement
		const formData = new FormData(form)

		const phoneValue = formData.get('phone')
		const cleanedPhoneValue = phoneValue && typeof phoneValue === 'string' ? phoneValue.replace(/\D/g, '') : ''

		const order = {
			phone: cleanedPhoneValue,
			cart: cartData ? JSON.parse(cartData) : []
		}

		const response = await sendOrder(order)

		if (response?.success === 1) {
			setOpen(true)
			localStorage.clear()
			setCartItems([])
		}
	}

	return (
		<form className={styles['shopping-cart']} onSubmit={onSubmit}>
			<h3 className={styles['shopping-cart_title']}>Добавленные товары</h3>
			{cartItems.length ? (
				<div>
					{cartItems.map((cartItem) => {
						const currentCartProduct = products.find((product) => product.id === cartItem.id)

						if (!currentCartProduct) {
							return null
						}

						return (
							<div className={styles['shopping-cart_items']} key={cartItem.id}>
								<h4>{currentCartProduct?.title}</h4>
								<div className={styles['shopping-cart_info']}>
									<p>{`X${cartItem.quantity}`}</p>
									<p>{`${currentCartProduct?.price * cartItem.quantity}₽`}</p>
								</div>
							</div>
						)
					})}
				</div>
			) : (
				<p className={styles['shopping-cart_empty']}>Ваша корзина пуста</p>
			)}
			<div className={styles['shopping-cart_actions']}>
				<PhoneInput type='tel' placeholder='+7 (___) ___ __-__' name='phone' required pattern='\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}' />
				<Button size='large' type='submit'>
					заказать
				</Button>
			</div>
			<Popup isOpen={open} onClose={closeModal}>
				<h3>Заказ успешно отправлен!</h3>
			</Popup>
		</form>
	)
}
