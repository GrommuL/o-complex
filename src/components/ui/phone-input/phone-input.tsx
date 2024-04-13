import { InputHTMLAttributes } from 'react'
import MaskedInput from 'react-text-mask'

import styles from './input.module.css'

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>

export const PhoneInput = ({ name, ...inputProps }: InputProps) => {
	return (
		<MaskedInput
			mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
			placeholder='+7 (___) ___-__'
			guide={true}
			showMask={true}
			type='tel'
			name={name}
			className={styles.input}
			{...inputProps}
		/>
	)
}
