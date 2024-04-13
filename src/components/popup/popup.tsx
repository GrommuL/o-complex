import { useOutsideClick } from '@/hooks/use-outside-click'

import styles from './popup.module.css'

type PopupProps = {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

export const Popup = ({ isOpen, onClose, children }: PopupProps) => {
	const { modalRef } = useOutsideClick(onClose)

	if (!isOpen) {
		return null
	}

	return (
		<div className={styles.overlay}>
			<div ref={modalRef} className={styles.popup}>
				<button className={styles.closeButton} onClick={onClose}>
					Закрыть
				</button>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	)
}
