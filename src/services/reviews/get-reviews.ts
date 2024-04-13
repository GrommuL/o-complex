'use server'

import type { Review } from '@/types/review-type'

export const getReviews = async (): Promise<Review[]> => {
	try {
		const response = await fetch('http://o-complex.com:1337/reviews', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			next: {
				revalidate: 3600
			}
		})

		if (!response.ok) {
			throw new Error('Ошибка при получении отзывов')
		}

		const reviews: Promise<Review[]> = await response.json()
		return reviews
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message)
			return []
		} else {
			console.log(error)
			return []
		}
	}
}
