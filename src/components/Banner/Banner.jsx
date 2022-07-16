import React from 'react'
import styles from './banner.module.scss'
import banner from '../../assets/images/banner.png'
const Banner = () => {
    // const { banner } = styles
    return (
        <div className={styles.banner}>
            <h1>
                探索。
                <br />
                福爾摩沙
            </h1>
            <div className={styles.wrap_banner}>
                <img src={banner} alt="banner" />
            </div>
        </div>
    )
}

export default Banner