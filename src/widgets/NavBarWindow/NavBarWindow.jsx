import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineMenuFold } from 'react-icons/ai'
import { MdSportsBasketball } from 'react-icons/md'
import { FaHandshake } from 'react-icons/fa'
import { GiPresent } from 'react-icons/gi'
import { BiReset } from 'react-icons/bi'
import { WiStars } from 'react-icons/wi'
import { Store } from 'app/App'

import styles from './styles.module.scss'

function NavBarWindow({ setIsNavBarOpen, isNavBarOpen }) {
	const [store] = useContext(Store)
	return (
		<div
			className={
				isNavBarOpen
					? [styles.windowWrapper, styles.active].join(' ')
					: [styles.windowWrapper]
			}
		>
			<div className={styles.headerWindow}>
				<div className={styles.headerWindowText}>
					{store.user.username && (
						<span>
							{store.user.username}
							<WiStars />
						</span>
					)}
				</div>
				<div className={styles.closeWrapper}>
					<div className={styles.hoverable}>
						<button
							onClick={() => setIsNavBarOpen(false)}
							className={styles.closeBtn}
						>
							<span className={styles.contentLoader}>
								<AiOutlineMenuFold />
							</span>
						</button>
					</div>
				</div>
			</div>
			<div className={styles.contentWindow}>
				<div className={styles.scroll}>
					<Link to='/sports' className={styles.item}>
						<span className={styles.contentLoader}>
							<div className={styles.icon}>
								<MdSportsBasketball />
							</div>
							<div>Sport</div>
						</span>
					</Link>
				</div>

				<div className={styles.scroll}>
					<Link to='/promotions' className={styles.item}>
						<span className={styles.contentLoader}>
							<div className={styles.icon}>
								<GiPresent />
							</div>
							<div>Promotion</div>
						</span>
					</Link>
				</div>

				<div className={styles.scroll}>
					<Link to='/sponsorships' className={styles.item}>
						<span className={styles.contentLoader}>
							<div className={styles.icon}>
								<FaHandshake />
							</div>
							<div>Sponsorship</div>
						</span>
					</Link>
				</div>
				<div className={styles.lineWrapper}>
					<hr className={styles.separator} />
				</div>
				<div className={styles.scroll}>
					<Link className={styles.item}>
						<span className={styles.contentLoader}>
							<div className={styles.icon}>
								<BiReset />
							</div>
							<div>Recent</div>
						</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default NavBarWindow
