import React from 'react'

import evertonLogo from 'assets/icons/everton-logo.svg'

import evertonFlag from 'assets/img/everton-flag.jpg'
import everton from 'assets/img/everton.jpg'

import styles from './styles.module.scss'

function SponsorEverton() {
	return (
		<div>
			<div className={styles.headerWrapper}>
				<div className={styles.headerWrapperTitle}>
					<h1 className={styles.title}>Everton Football Club </h1>
					<h2 className={styles.secondaryTitle}>Main Partner</h2>
				</div>
				<div className={styles.headerWrapperLogo}>
					<img src={evertonLogo} alt='Everton logo'/>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.contantBlock}>
					<div className={styles.contantBlockInfo}>
						<h2 className={styles.contantBlockInfoTitle}>Main Partner</h2>
						<p className={styles.contantBlockInfoText}>
							Stake is delighted to announce we have become the Main Partner of
							Everton Football Club. The agreement will see the Stake logo adorn
							the club’s men’s and women’s shirts in a multi-year deal. We are
							thrilled to partner with Everton in what is an important period in
							the club’s history, as they begin their farewell to the historic
							Goodison Park and look ahead to life in a new waterfront stadium.
						</p>
						<h2 className={styles.contantBlockInfoTitle}>Legendary Players</h2>
						<p className={styles.contantBlockInfoText}>
							With nine top-flight English titles, five FA Cups and a European
							Cup Winners’ Cup, Everton is one of the most iconic and storied
							clubs in the game. Home to some of England’s most legendary
							players, Gary Lineker, Paul Gascoigne and Wayne Rooney are just
							some of the nation’s brightest stars to have pulled on the famous
							royal blue jersey. Coached by another iconic name in Frank
							Lampard, and with an exciting combination of international stars
							and home-grown talent, The Toffees have a huge amount to look
							forward to both on and off-the-pitch. Stake can’t wait to be part
							of the club’s exciting future.
						</p>
					</div>
					<div className={styles.contantBlockImg}>
						<img src={evertonFlag} alt='Everton'/>
					</div>
				</div>
				<div className={styles.contantBlock}>
					<div className={styles.contantBlockImg}>
						<img src={everton} alt='Everton'/>
					</div>
					<div className={styles.contantBlockInfo}>
						<h2 className={styles.contantBlockInfoTitle}>Impressive Growth</h2>
						<p className={styles.contantBlockInfoText}>
							<span>
								Professor Denise Barrett-Baxendale, Chief Executive at Everton,
								said: “Stake is an ambitious organisation with impressive growth
								plans and we’re all very excited to enter into a partnership
								with them at this stage in their journey.
							</span>
						</p>
						<p className={styles.contantBlockInfoText}>
							<span>
								“I am pleased to say that we have already been working together
								with Stake on some exciting activities and content for our local
								and international supporters and we look forward to sharing more
								detail on these plans soon.”
							</span>
						</p>
						<p className={styles.contantBlockInfoText}>
							<span>
								At Stake, we too see this partnership as a wonderful match
								between two elite organisations, both of whom have lofty
								ambitions to become the best in their field, and we will do
								everything in our ability to help Everton achieve their
								ambitions over the coming seasons.
							</span>
						</p>
						<h2 className={styles.contantBlockInfoTitle}>
							What will we deliver?
						</h2>
						<p className={styles.contantBlockInfoText}>
							As two forward thinking brands come together, we want to ride the
							wave with the Everton faithful and bring them even closer to the
							heart of their club. With behind-the-scenes access to players, VIP
							experiences, matchday giveaways and much, much more. The coming
							seasons are sure to be a brilliant experience for Everton fans and
							Stake participants alike. The journey begins here.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SponsorEverton
