import React from 'react'

import PromotionImg from 'assets/img/group-banner.png'
import PromotionBanner1 from 'assets/img/PromotionBanner1_1200x630.webp'
import PromotionBanner2 from 'assets/img/PromotionBanner2_1200x630.webp'
import PromotionBanner3 from 'assets/img/PromotionBanner3_1200x630.webp'
import PromotionBanner4 from 'assets/img/PromotionBanner4_1200x630.webp'
import PromotionBanner5 from 'assets/img/PromotionBanner5_1200x630.webp'

import styles from './styles.module.scss'

function Promotion() {
	return (
		<div classname={styles.scrollable}>
			<div className={styles.promoWrapper}>
				<div className={styles.titleWrapper}>
					<div className={styles.bg}></div>

					<div className={styles.central}>
						<div className={styles.pageTitle}>Promotions</div>
						<div className={styles.pageLogo}>
							<img
								className={styles.imgBg}
								src={PromotionImg}
								alt='Promotion'
							/>
						</div>
					</div>
				</div>

				<div className={styles.bgWrapper}>
					<div className={styles.cardWrapper}>
						<div className={styles.mainTitle}>Latest Promotions</div>
						<div className={styles.itemWrapper}>
							<div className={styles.item}>
								<div classname={styles.img}>
									<img
										className={styles.imgFoto}
										src={PromotionBanner1}
										alt='Promotion'
									/>
								</div>
								<div className={styles.timeDescrip}>
									Ends at 4:00 PM 12/30/2022
								</div>
								<div className={styles.gameTitle}>Daily Races</div>
							</div>

							<div className={styles.item}>
								<div classname={styles.img}>
									<img
										className={styles.imgFoto}
										src={PromotionBanner2}
										alt='Promotion'
									/>
								</div>
								<div className={styles.timeDescrip}>
									Ends at 1.59 AM 1/1/2023
								</div>
								<div className={styles.gameTitle}>Stake.us Weekly Giveway</div>
							</div>

							<div className={styles.item}>
								<div classname={styles.img}>
									<img
										className={styles.imgFoto}
										src={PromotionBanner3}
										alt='Promotion'
									/>
								</div>
								<div className={styles.timeDescrip}>
									Ends at 8:00 AM 12/23/2022
								</div>
								<div className={styles.gameTitle}>Slot Battle</div>
							</div>

							<div className={styles.item}>
								<div classname={styles.img}>
									<img
										className={styles.imgFoto}
										src={PromotionBanner4}
										alt='Promotion'
									/>
								</div>
								<div className={styles.timeDescrip}>
									Ends at 8:00 AM 12/28/2022
								</div>
								<div className={styles.gameTitle}>Originals Challenge</div>
							</div>

							<div className={styles.item}>
								<div classname={styles.img}>
									<img
										className={styles.imgFoto}
										src={PromotionBanner5}
										alt='Promotion'
									/>
								</div>
								<div className={styles.timeDescrip}>
									Ends at 4:00 PM 12/30/2022
								</div>
								<div className={styles.gameTitle}>Challenges</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Promotion
