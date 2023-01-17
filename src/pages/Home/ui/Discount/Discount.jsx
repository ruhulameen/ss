import React, { useContext } from 'react'
import { IoLogoTwitch } from 'react-icons/io'
import { AiOutlineGoogle } from 'react-icons/ai'
import { CgFacebook } from 'react-icons/cg'
import { MdWavingHand } from 'react-icons/md'
import { useModal } from 'react-modal-hook'

import { Store } from 'app/App'
import welcomeTopImg from 'assets/img/sweeps-welcome-top-en.png'
import { SignUp } from 'shared/ui'

import styles from './styles.module.scss'

function Discount({ isNavBarOpen }) {
	const [store] = useContext(Store)
	const [showSignUpModal, hideSignUpModal] = useModal(() => (
		<SignUp hideSignUpModal={hideSignUpModal} />
	))

	return (
		<>
			{store.isUserLoggedIn ? (
				<div
					className={
						isNavBarOpen
							? [styles.wrapper, styles.active].join(' ')
							: styles.wrapper
					}
				>
					<div className={styles.mainRegister}>
						<div className={styles.contener}>
							<h1 className={styles.title}>
								{`Welcome back, ${store.user.username} `}
								<MdWavingHand />
							</h1>
							<button className={styles.mainBtn}>
								<span> Go to sport bettings </span>
							</button>
						</div>
					</div>
					<div className={styles.mainImg}>
						<img alt='Welcome top img' src={welcomeTopImg} />
					</div>
				</div>
			) : (
				<div
					className={
						isNavBarOpen
							? [styles.wrapper, styles.active].join(' ')
							: styles.wrapper
					}
				>
					<div className={styles.mainRegister}>
						<div className={styles.contener}>
							<h1 className={styles.title}>Play Smarter</h1>
							<button
								className={styles.mainBtn}
								onClick={() => showSignUpModal()}
							>
								<span> Register instanly</span>
							</button>
							<div className={styles.authWrapper}>
								<div className={styles.orContent}>
									<span className={styles.orText}>OR</span>
								</div>
							</div>
							<div className={styles.networks}>
								<button className={styles.socialNetworks}>
									<CgFacebook />
								</button>
								<button className={styles.socialNetworks}>
									<AiOutlineGoogle />
								</button>
								<button className={styles.socialNetworks}>
									<IoLogoTwitch />
								</button>
							</div>
						</div>
					</div>
					<div className={styles.mainImg}>
						<img alt='Welcome top img' src={welcomeTopImg} />
					</div>
				</div>
			)}
		</>
	)
}

export default Discount
