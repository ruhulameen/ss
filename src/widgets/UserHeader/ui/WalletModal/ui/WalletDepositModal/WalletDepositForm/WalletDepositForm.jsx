import React, { useContext, useState } from 'react'
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'

import { CustomInput } from '../CustomInput'
import { depositSchema } from 'shared/validations/common'
import { Store } from 'app/App'

import styles from './styles.module.scss'

function WalletDepositForm({ hideModal }) {
	const navigate = useNavigate()
	const API = '/api/auth/wallet/deposit'
	const [depositButtonText, setDepositButtonText] = useState('Deposit');
	const [depositButtonClass, setDepositButtonClass] = useState(styles.formBtn);
    const [, setStore] = useContext(Store)

	function onSubmit(values, actions) {
		setDepositButtonText('Processing..');
		setDepositButtonClass(styles.formBtn)
		localStorage.setItem('DepositRequest', Math.ceil(values.deposit))
        const storedUser = JSON.parse(localStorage.getItem('user'));
		fetch(API, {
				method: 'POST',
                headers: {
					'Authorization': 'Bearer ' + storedUser.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({depositAmount: Math.ceil(values.deposit)})
				}
			)
			.then((response) => {
				return response.json()
			})
			.then((res) => {
				if(res.balance_after) {
					setDepositButtonText('Success! Balance: ' + Math.ceil(res.balance_after.formatted).toFixed(2));
					setDepositButtonClass(styles.formBtn + ' ' + styles.succes);
					setStore(() => ({ user: { ...storedUser, balance: res.balance_after.formatted }, isUserLoggedIn: true }))
				} else {
					if(res.message ? setDepositButtonText(res.message) :  setDepositButtonText('Failed, please try again.'));
					setDepositButtonClass(styles.formBtn + ' ' + styles.failed);
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
				deposit: '5'
			}}
			validationSchema={depositSchema}
			onSubmit={onSubmit}
		>
			{({ isSubmitting }) => (
				<Form className={styles.wrap}>
					<div className={styles.stacked} htmlFor='deposit'>
						<CustomInput label='Deposit' name='deposit' type='text' />
					</div>
					<button
						disabled={isSubmitting}
						className={depositButtonClass}
						type='submit'
					>
						{depositButtonText}
					</button>
				</Form>
			)}
		</Formik>
	)
}

export default WalletDepositForm
