import React from "react";

import styles from './styles.module.scss'
import playBanner1 from 'assets/img/play-banner1.png'
import playBanner2 from 'assets/img/play-banner2.png'
import playBanner3 from 'assets/img/play-banner3.png'
import { Link } from "react-router-dom";

const PlayBanner = () => {
    return (
        <section className={styles.PlayBanner}>
            <h3>Who play on Stake.us?</h3>
            <span className={styles.spaceTitle}></span>
            <div className={styles.contentArea}>
                <div className={styles.blockWrapper}>
                    <div className={styles.contentBlock}>
                        <img src={playBanner1} alt="play Banner1" />
                        <span className={styles.spaceImg}></span>
                        <h4>Industry favorites</h4>
                        <span className={styles.spaceImg}></span>
                        <p className={styles.descriotion}>
                            With exclusive access to games by both Hacksaw and Pragmatic, you can enjoy the best of the best.
                        </p>
                    </div>
                </div>

                <div className={styles.blockWrapper}>
                    <div className={styles.contentBlock}>
                        <img src={playBanner2} alt="play Banner2" />
                        <span className={styles.spaceImg}></span>
                        <h4>Instant coins</h4>
                        <span className={styles.spaceImg}></span>
                        <p className={styles.descriotion}>
                            Sign up and instantly start playing with both gold coins and Stake Coins. No strings attached!
                        </p>
                    </div>
                </div>

                <div className={styles.blockWrapper}>
                    <div className={styles.contentBlock}>
                        <img src={playBanner3} alt="play Banner3" />
                        <span className={styles.spaceImg}></span>
                        <h4>A truly social casino</h4>
                        <span className={styles.spaceImg}></span>
                        <p className={styles.descriotion}>
                            Jump straight in by joining our chat rooms, sharing your favorite games, and enjoy our immersive social experience.
                        </p>
                    </div>
                </div>
            </div>

            <span className={styles.space}></span>

            <Link className={styles.linkGoTo} to="/">
                <span>
                    Go to Social Casino
                </span>
            </Link>
        </section>
    )

}
//

export default PlayBanner;