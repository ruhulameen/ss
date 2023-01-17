import React, { useState, useEffect } from 'react'

import { ImArrowUp } from 'react-icons/im'
import { IoWalletSharp } from 'react-icons/io5'

import styles from './styles.module.scss'

function Rates({ abbreviation, officialRate, usd }) {
	return (
		<div className={styles.balanceInfo}>
			<div className={styles.balance}>{(officialRate / usd).toFixed(3)}</div>
			<div className={styles.typeCurrency}>{abbreviation}</div>
		</div>
	)
}

function BalanceWindow() {
	const [usd, setUsd] = useState('1')
	const [exchangeRate, setExchangeRate] = useState([])
	const API = '/api/auth/wallet/exchange_rate'

	useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
		fetch(API + '?token=' +  storedUser.token)
			.then((response) => {
				return response.json()
			})
			.then((res) => {
				setExchangeRate(res.data)
				res.data.forEach((item) => {
					setUsd(item.usd_rate / (res.balance / 100))
				})
			})
	}, [])

	return (
		<div className={styles.modalWindowWrapper}>
			<div className={styles.arrow}>
				<ImArrowUp />
			</div>
			<form className={styles.form}>
				<input className={styles.input} placeholder='Search currencies'></input>
			</form>
			<div className={styles.scroll}>
				<div className={styles.currencyWrapper}>
					<div className={styles.modalContent}>
						{exchangeRate.map((item) => {
							return (
								<Rates
									usd={usd}
									key={item.id}
									abbreviation={item.currency}
									officialRate={item.usd_rate}
								/>
							)
						})}
					</div>
				</div>
			</div>
			<div className={styles.buttomBlock}>
				<hr className={styles.separator}></hr>
				<div className={styles.walletSet}>
					<div className={styles.icon}>
						<IoWalletSharp />
					</div>
					<button className={styles.discrip}>Wallet Settings</button>
				</div>
			</div>
		</div>
	)
}

export default BalanceWindow
