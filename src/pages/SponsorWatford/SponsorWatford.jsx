import React from 'react'

import watfordLogo from 'assets/icons/watford-logo.svg'

import watford from 'assets/img/watford.jpg'
import watfordSponsor from 'assets/img/watford-sponsor.png'

import styles from './styles.module.scss'

function SponsorWatford() {
	return (
		<div>
			<div className={styles.headerWrapper}>
				<div className={styles.headerWrapperTitle}>
					<h1 className={styles.title}>Watford FC</h1>
					<h2 className={styles.secondaryTitle}>Main Club Sponsor</h2>
				</div>
				<div className={styles.headerWrapperLogo}>
					<img src={watfordLogo} alt='Watford'/>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.contantBlock}>
					<div className={styles.contantBlockInfo}>
						<h2 className={styles.contantBlockInfoTitle}>Official Sponsor</h2>
						<p className={styles.contantBlockInfoText}>
							Stake is delighted to enter it’s second year as the Official
							Sponsor of Watford FC, with our logo appearing on the front of the
							club’s shirt for the duration of the 2022/23 season, in which The
							Hornets will be looking to bounce back to the Premier League.
						</p>
						<h2 className={styles.contantBlockInfoTitle}>A New Era</h2>
						<p className={styles.contantBlockInfoText}>
							The Championship is the third most attended league in Europe and
							with that comes a thrilling competition in which fans can expect
							plenty of goals, talking points and moments of individual
							brilliance. Watford will be embarking on a new era with the
							appointment as Rob Edwards as head coach and we can’t wait to be
							with The Hornets on their journey back to the top-flight of
							English football.
						</p>
					</div>
					<div className={styles.contantBlockImg}>
						<img src={watford} alt='Watford'/>
					</div>
				</div>
				<div className={styles.contantBlock}>
					<div className={styles.contantBlockImg}>
						<img src={watfordSponsor} alt='Watford'/>
					</div>
					<div className={styles.contantBlockInfo}>
						<h2 className={styles.contantBlockInfoTitle}>The Next Chapter</h2>
						<p className={styles.contantBlockInfoText}>
							<span>
								Scott Duxbury, Watford FC Chairman & CEO, said: “We are
								delighted to continue working with Stake as our principal shirt
								sponsor for the 2022/23 season. It is great to have their
								continued support, they have become a valued partner and we look
								forward to the next chapter together.”
							</span>
						</p>
						<p className={styles.contantBlockInfoText}>
							<span>
								At Stake, we are always challenging ourselves to continue to be
								the best in the industry. We align with Watford’s inspiring and
								motivated approach towards attaining success. As the Hornets
								family continues to grow, we are committed to supporting the
								club through thick and thin.
							</span>
						</p>
						<h2 className={styles.contantBlockInfoTitle}>
							What can the fans expect?
						</h2>
						<p className={styles.contantBlockInfoText}>
							Watford remain one of the most lucrative sponsorships we’ve seen
							at Stake and we’ll be taking fans behind the scenes at the club
							with some fantastic new content.
						</p>
						<p className={styles.contantBlockInfoText}>
							As the team aspires to reach for some silverware, we’ll be riding
							the ups & downs with them, offering our customers exclusive VIP
							access to what is certain to be a hard fought and fascinating
							campaign.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SponsorWatford
