import React from 'react'
import styles from './themecard.module.scss';
import Card from '../Card/Card';
import location_purple from '../../assets/images/location_purple.png';
const ThemeCard = () => {
    const { theme_card, wrap_title, more_point } = styles;
    return (
        <div className={theme_card}>
            <div className={wrap_title}>
                <h2>
                    <img src={location_purple} alt="" />
                    <span>
                        熱門景點
                    </span>
                </h2>
                <p className={more_point}>更多熱門景點</p>
            </div>
            <Card />
        </div>
    )
}

export default ThemeCard