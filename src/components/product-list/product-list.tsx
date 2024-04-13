import { ProductCard } from '@/components/product-card'

import { Product } from '@/types/product-type'

import styles from './product-list.module.css'
import { CartItem } from '@/types/cart-item-type'
import { Dispatch, SetStateAction } from 'react'

type ProductListProps = {
	products: Product[]
	cartItems: CartItem[]
	setCartItems: Dispatch<SetStateAction<CartItem[]>>
	addToCart: (id: number) => void
	decreaseCartItemQuantity: (id: number) => void
	increaseCartItemQuantity: (id: number) => void
}

export const ProductList = ({
	products,
	setCartItems,
	cartItems,
	addToCart,
	decreaseCartItemQuantity,
	increaseCartItemQuantity
}: ProductListProps) => {
	if (!products.length) return null

	return (
		<ul className={styles.products}>
			{products.map((product) => (
				<li key={product.id}>
					<ProductCard
						product={product}
						setCartItems={setCartItems}
						cartItems={cartItems}
						addToCart={addToCart}
						decreaseCartItemQuantity={decreaseCartItemQuantity}
						increaseCartItemQuantity={increaseCartItemQuantity}
					/>
				</li>
			))}
		</ul>
	)
}
