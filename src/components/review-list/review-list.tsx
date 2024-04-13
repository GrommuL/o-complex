import { ReviewCard } from '@/components/review-card'

import { getReviews } from '@/services/reviews/get-reviews'

import styles from './review-list.module.css'
import { Suspense } from 'react'

export const ReviewList = async () => {
	const reviews = await getReviews()

	if (!reviews.length) return null

	return (
		<section>
			<h2 className='visually-hidden'>Отзывы пользователей</h2>
			<Suspense fallback={<div>Loading...</div>}>
				<ul className={styles['review_list']}>
					{reviews.map(({ id, text }, index) => (
						<li className={styles['review_item']} key={index}>
							<ReviewCard content={text} />
						</li>
					))}
				</ul>
			</Suspense>
		</section>
	)
}
