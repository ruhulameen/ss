import React from 'react'
import { Link } from 'react-router-dom'
import { useModal } from 'react-modal-hook'

import { SignIn, SignUp } from 'shared/ui'
import stakeLogo from 'assets/img/stakeLogo.jpg'

import styles from './styles.module.scss'

function Header() {
	const [showSignUpModal, hideSignUpModal] = useModal(() => (
		<SignUp hideSignUpModal={hideSignUpModal} />
	))
	const [showSignInModal, hideSignInModal] = useModal(() => (
		<SignIn hideSignInModal={hideSignInModal} />
	))

	return (
		<header>
			<div className={styles.headerWrapper}>
				<div>
					<Link to='/'>
						<img className={styles.logoImg} alt='Stake logo' src={stakeLogo} />
					</Link>
				</div>
				<div className={styles.btnField}>
					<button
						onClick={() => showSignInModal()}
						className={styles.signInBtn}
					>
						<span className={styles.signInBtnText}>Sign In</span>
					</button>
					<button onClick={() => showSignUpModal()} className={styles.btnReg}>
						<span className={styles.btnText}>Register</span>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
