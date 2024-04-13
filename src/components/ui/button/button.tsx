import { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './button.module.css'

type ButtonProps = {
	size: 'large' | 'small'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, type = 'button', size = 'large', ...buttonProps }: ButtonProps) => {
	return (
		<button className={cn(styles.button, styles[size])} type={type} {...buttonProps}>
			{children}
		</button>
	)
}
