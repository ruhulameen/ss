import React from 'react'

import { Description, Discount, PlayBanner, StakeDrake } from './ui'
import styles from './styles.module.scss'

function Home({ isNavBarOpen }) {
	return (
		<div>
			<Discount isNavBarOpen={isNavBarOpen} />
			<div
				className={
					isNavBarOpen
						? [styles.wrapper, styles.active].join(' ')
						: styles.wrapper
				}
			>
				<Description />
				<PlayBanner />
				<StakeDrake />
			</div>
		</div>
	)
}

export default Home
