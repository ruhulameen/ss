import React from "react";
import { useNavigate } from "react-router-dom";

import StakeDrakeImg from "assets/img/stakeLogo.png"
import Border from "assets/img/border.png"
import Drake from "assets/img/drake.png"

import styles from './styles.module.scss'



const StakeDrake = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.stakeDrakeBlock}>
            <div className={styles.stakeDrakeLink}>
                <div
                onClick={() => {
                    navigate('/sponsorships/drake')
                    window.scroll(0, 0)}}
                className={styles.link}>Learn more</div>
            </div>
            <div className={styles.stakeDrakeWrapper}>
                <img className={styles.imgStake} src={StakeDrakeImg} alt='stake' />
                <img className={styles.imgBorder} src={Border} alt='border' />
                <img className={styles.imgDrake} src={Drake} alt='drake' />
            </div>
            <div className={styles.stakeDrakeLinkImgBg}>
                <img className={styles.img} src={Drake} alt='drakeBg' />
            </div>
        </div>
    )
}

export default StakeDrake;
