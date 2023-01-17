import React, { useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import { IoWalletSharp } from 'react-icons/io5'
import { WalletDepositForm } from './ui/WalletDepositModal/WalletDepositForm'

import { WalletWithdrawForm } from './ui/WalletWithdrawModal/WalletWirhdrawForm'
import styles from './styles.module.scss'

function WalletModal({ hideWalletModal }) {
	const [isDepositeActive, setIsDepositeActive] = useState(true)

	return (
		<div className={styles.modalWindow}>
			<div className={styles.overlay} onClick={() => hideWalletModal()}></div>
			<div className={styles.window} onClick={(e) => e.stopPropagation()}>
				<div className={styles.header}>
					<div className={styles.walletTextWrapper}>
						<IoWalletSharp className={styles.walletIcon} />
						<div className={styles.walletText}>Wallet</div>
					</div>
					<button onClick={() => hideWalletModal()} className={styles.closeBtn}>
						<IoIosClose className={styles.closeIcon} />
					</button>
				</div>
				<div className={styles.content}>
					<div className={styles.centerWrapper}>
						<div className={styles.tabsWrapper}>
							<div className={styles.slider}>
								<div className={styles.contentWrapper}>
									<button
										className={
											isDepositeActive
												? styles.walletBtnActive
												: styles.walletBtnDisabled
										}
										onClick={() => setIsDepositeActive(true)}
									>
										<span className={styles.walletBtnText}>Deposit</span>
									</button>
									<button
										className={
											isDepositeActive
												? styles.walletBtnDisabled
												: styles.walletBtnActive
										}
										onClick={() => setIsDepositeActive(false)}
									>
										<span className={styles.walletBtnText}>Withdraw</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					{isDepositeActive ? (
						<WalletDepositForm hideModal={hideWalletModal} />
					) : (
						<WalletWithdrawForm hideModal={hideWalletModal} />
					)}
				</div>
			</div>
		</div>
	)
}

export default WalletModal
