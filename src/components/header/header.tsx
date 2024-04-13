import styles from './header.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles['header_content']}>тестовое задание</div>
		</header>
	)
}
