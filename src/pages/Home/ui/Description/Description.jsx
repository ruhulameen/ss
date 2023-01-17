import React from 'react'
import { Link } from 'react-router-dom'

import ruletteImg from 'assets/img/stake-roulette.png'
import barImg from 'assets/img/bar.png'
import socialCasinoDrake from 'assets/img/sweeps-home-hero-en.avif'

import styles from './styles.module.scss'

function Description() {
	return (
		<div>
			<div className={styles.sectionSocialCasino}>
				<div className={styles.imgHolder}>
					<img
						className={styles.imgSocialCasino}
						draggable='false'
						loading='lazy'
						src={socialCasinoDrake}
						alt='Socia casino'
					/>
				</div>
				<div className={styles.gradient}></div>
				<div className={styles.socialCasinoWrapper}>
					<h1 className={styles.title}>America's Social Casino</h1>
					<span className={styles.info}>
						Our social casino has been tailor-made to provide the ultimate
						social, safe and free gaming experience. With a wide variety of over
						200 industry favorite games by the most reputable providers, you
						wont find better action anywhere else.
					</span>
					<div className={styles.linkWrapper}>
						<Link className={styles.btn} to='/'>
							Go to Social Casino
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.contentBlock}>
					<div className={styles.contentImg}>
						<img className={styles.img} alt='roulete' src={ruletteImg} />
					</div>
					<div className={styles.contentInfo}>
						<h2 className={styles.contentTitle}>Claim Your Stake Coins</h2>
						<span className={styles.contentText}>
							{' '}
							You can claim your free Stake Coins via our Daily Login Bonuses,
							Races, Rakeback, Customer Benefits, Mail a Request or receive a
							free bonus when you purchase Gold Coins.
						</span>
					</div>
				</div>
				<div className={styles.contentBlock}>
					<div className={styles.contentImg}>
						<img className={styles.img} alt='bar' src={barImg} />
					</div>
					<div className={styles.contentInfo}>
						<h2 className={styles.contentTitle}>No Purchase Necessary</h2>
						<span className={styles.contentText}>
							{' '}
							We are dedicated to building a completely free gaming experience.
							Play with both Gold Coins and Stake Coins immediately without any
							payment!
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Description
