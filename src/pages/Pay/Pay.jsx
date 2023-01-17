import { DataBase, Store } from 'app/App'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { cardValidation } from 'shared/validations'
import { ccFormat } from 'shared/helpers'

import styles from './styles.module.scss'
import { observer } from 'mobx-react-lite'
import { PayModel } from './model'

function Pay() {
	const [store, setStore] = useContext(Store)
	const [dataBase, setDataBase] = useContext(DataBase)
	const [error, setError] = useState(false)
	const sumOfBalance =
		+store.user.balance + +localStorage.getItem('DepositRequest')
	const navigate = useNavigate()

	function validation() {
		if (cardValidation(PayModel.cardInfo) === true) {
			setError(true)
		} else {
			setError(false)
			setStore((prev) => {
				return {
					...prev,
					user: {
						...prev.user,
						balance: `${sumOfBalance}`,
						cardInfo: {
							number: PayModel.cardInfo.number,
							month: PayModel.cardInfo.month,
							year: PayModel.cardInfo.year,
							holder: PayModel.cardInfo.holder,
							cvv: PayModel.cardInfo.cvv
						}
					}
				}
			})
			setDataBase((prev) => {
				return {
					...prev,
					users: dataBase.users.map((user) => {
						if (
							user.email === store.user.email &&
							user.password === store.user.password
						) {
							return {
								...store.user,
								balance: `${sumOfBalance}`,
								cardInfo: {
									number: PayModel.cardInfo.number,
									month: PayModel.cardInfo.month,
									year: PayModel.cardInfo.year,
									holder: PayModel.cardInfo.holder,
									cvv: PayModel.cardInfo.cvv
								}
							}
						} else {
							return user
						}
					})
				}
			})
			PayModel.resetCardInfo()
			localStorage.setItem('DepositRequest', 0)
			navigate('/')
			console.log('deposit')
		}
	}

	return (
		<div className={styles.conentWrapper}>
			<div className={styles.content}>
				<div className={styles.header}>
					<div className={styles.logoWrapper}>
						<div className={styles.logoText}>Stake</div>
					</div>
					<div className={styles.headerInfoWrapper}>
						<div className={styles.headerInfoText}>
							<div className={styles.wrap}>
								<div className={styles.headerInfoTitle}>Сompany:</div>
								<span className={styles.text}>Stake </span>
							</div>
							<br />
							<div className={styles.wrap}>
								<div className={styles.headerInfoTitle}>Amount of payment:</div>
								<span className={styles.text}>
									{`${localStorage.getItem('DepositRequest')}$`}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.mainTitle}>Entering bank card details</div>
				<div className={styles.cardBlock}>
					<div className={styles.front}>
						<div className={styles.cardNumberField}>
							<span className={styles.cardText}>CARD NUMBER</span>
							<input
								type='text'
								className={
									error
										? [styles.inputCardNumber, styles.error].join(' ')
										: styles.inputCardNumber
								}
								placeholder='0000 0000 0000 0000'
								value={ccFormat(PayModel.cardInfo.number)}
								onChange={(e) => PayModel.setCardNumber(e.target.value)}
							/>
						</div>
						<div className={styles.cardExpire}>
							<span className={styles.cardExpireSpan}>
								<b className={styles.cardExpireText}>VALID THRU (MM / YY)</b>
							</span>
							<input
								type='text'
								className={
									error
										? [styles.inputExpireMonth, styles.error].join(' ')
										: styles.inputExpireMonth
								}
								placeholder='MM'
								maxLength='2'
								value={PayModel.cardInfo.month}
								onChange={(e) => PayModel.setCardMonth(e.target.value)}
							/>
							<span className={styles.inputSlash}>/</span>
							<input
								type='text'
								className={
									error
										? [styles.inputExpireYear, styles.error].join(' ')
										: styles.inputExpireYear
								}
								placeholder='YY'
								maxLength='2'
								value={PayModel.cardInfo.year}
								onChange={(e) => PayModel.setCardYear(e.target.value)}
							/>
						</div>
						<div className={styles.cardHolderField}>
							<span className={styles.cardHolderText}>CARD HOLDER NAME</span>
							<input
								type='text'
								className={
									error
										? [styles.inputCardHolder, styles.error].join(' ')
										: styles.inputCardHolder
								}
								placeholder='SERGEY IVANOV'
								value={PayModel.cardInfo.holder}
								onChange={(e) => PayModel.setCardHolder(e.target.value)}
							/>
						</div>
						<div className={styles.cardError}></div>
					</div>
					<div className={styles.back}>
						<div className={styles.cvcField}>
							<span>
								CVC2 /
								<br />
								CVV
							</span>
							<input
								type='text'
								className={
									error
										? [styles.cvvInput, styles.error].join(' ')
										: styles.cvvInput
								}
								placeholder='000'
								maxLength='3'
								value={PayModel.cardInfo.cvv}
								onChange={(e) => PayModel.setCardCvv(e.target.value)}
							/>
						</div>
					</div>
				</div>
				{error && (
					<div className={styles.errorText}>Please check your card details</div>
				)}
				<button className={styles.paymentBtn} onClick={validation}>
					<span>Make a payment</span>
				</button>
			</div>
		</div>
	)
}

export default observer(Pay)
