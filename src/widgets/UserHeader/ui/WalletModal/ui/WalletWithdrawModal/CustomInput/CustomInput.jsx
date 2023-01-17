import React from 'react'
import { useField } from 'formik'

import styles from './styles.module.scss'

function CustomInput({ label, ...props }) {
	const [field, meta] = useField(props)

	return (
		<>
			<span
				className={
					meta.touched && meta.error
						? styles.inputTextErrorWrapper
						: styles.inputTextError
				}
			>
				<div className={styles.inputText}>Enter withdraw amount.</div>
			</span>
			<input
				{...field}
				{...props}
				className={
					meta.touched && meta.error ? styles.inputError : styles.input
				}
			/>
			<div
				className={
					meta.touched && meta.error
						? styles.errorTextWrapper
						: styles.textWrapper
				}
			>
				<div>
					{meta.touched && meta.error
						? meta.error
						: '*Maximum withdraw at one time 1.000.000$'}
				</div>
			</div>
		</>
	)
}

export default CustomInput
