import sanitizeHtml from 'sanitize-html'

import styles from './review-card.module.css'

export const ReviewCard = ({ content }: { content: string }) => {
	return <div className={styles.card} dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}></div>
}
