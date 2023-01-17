import React, { useContext, useState } from 'react'
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'
import { Store } from 'app/App'

import { CustomInput } from '../CustomInput'
import { withdrawSchema } from 'shared/validations/common'

import styles from './styles.module.scss'

function WalletWithdrawForm({ hideModal }) {
	const navigate = useNavigate()
	const API = '/api/auth/wallet/withdraw'
	const [withdrawButtonText, setWithdrawButtonText] = useState('Withdraw');
	const [withdrawButtonClass, setWithdrawButtonClass] = useState(styles.formBtn);
    const [, setStore] = useContext(Store)

	function onSubmit(values, actions) {
		setWithdrawButtonText('Processing..');
		setWithdrawButtonClass(styles.formBtn)
		localStorage.setItem('WithdrawRequest', Math.ceil(values.withdraw))
        const storedUser = JSON.parse(localStorage.getItem('user'));
		fetch(API, {
				method: 'POST',
                headers: {
					'Authorization': 'Bearer ' + storedUser.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({withdrawAmount: Math.ceil(values.withdraw)})
				}
			)
			.then((response) => {
				return response.json()
			})
			.then((res) => {
				if(res.balance_after) {
					setWithdrawButtonText('Success! Balance: ' + Math.ceil(res.balance_after.formatted).toFixed(2));
					setWithdrawButtonClass(styles.formBtn + ' ' + styles.succes);
					setStore(() => ({ user: { ...storedUser, balance: res.balance_after.formatted }, isUserLoggedIn: true }))
				} else {
					if(res.message ? setWithdrawButtonText(res.message) :  setWithdrawButtonText('Failed, please try again.'));
					setWithdrawButtonClass(styles.formBtn + ' ' + styles.failed);
				}
				console.log(res)
			})
		//hideModal()
		actions.resetForm()
		//navigate('pay')
	}

	return (
		<Formik
			initialValues={{
				withdraw: '5'
			}}
			validationSchema={withdrawSchema}
			onSubmit={onSubmit}
		>
			{({ isSubmitting }) => (
				<Form className={styles.wrap}>
					<div className={styles.stacked} htmlFor='withdraw'>
						<CustomInput label='Withdraw' name='withdraw' type='text' />
					</div>
					<button
						disabled={isSubmitting}
						className={withdrawButtonClass}
						type='submit'
					>
						{withdrawButtonText}
					</button>
				</Form>
			)}
		</Formik>
	)
}

export default WalletWithdrawForm
