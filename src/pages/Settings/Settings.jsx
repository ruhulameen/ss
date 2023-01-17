import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsXLg } from 'react-icons/bs'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'

import { DataBase } from 'app/App'

import styles from './styles.module.scss'
import General from './General/General'
import Security from './Security/Security'

function Settings() {
	const [dataBase, setDataBase] = useContext(DataBase)
	const [isgeneralActive, setIsGeneralActive] = useState(true)
	const [isSecurityActive, setIsSecurityActive] = useState(false)
	return (
		<div>
			<div className={styles.wrapper}>
				<div className={styles.title}>
					<div className={styles.settings}>
						<SettingsRoundedIcon
							className={styles.settingsIcon}
							fontSize='medium'
						/>
						<h1 className={styles.settingsTitle}>Settings</h1>
					</div>
					<Link to='/'>
						<BsXLg className={styles.exit} />
					</Link>
				</div>
				<div className={styles.contener}>
					<div className={styles.outerWrapper}>
						<div className={styles.nav}>
							<div
								onClick={() => {
									setIsGeneralActive(true)
									setIsSecurityActive(false)
								}}
								className={isgeneralActive ? styles.linkActive : styles.link}
							>
								<span className={styles.navText}>General</span>
							</div>
							<div
								onClick={() => {
									setIsSecurityActive(true)
									setIsGeneralActive(false)
								}}
								className={isSecurityActive ? styles.linkActive : styles.link}
							>
								<span className={styles.navText}>Security</span>
							</div>
							<div className={styles.dash}></div>
						</div>
					</div>
					<div>
						{isgeneralActive ? (
							<General dataBase={dataBase} setDataBase={setDataBase} />
						) : (
							<Security dataBase={dataBase} setDataBase={setDataBase} />
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Settings
