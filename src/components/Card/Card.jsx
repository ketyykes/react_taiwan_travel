import React from 'react'
import styles from './card.module.scss'
import location_green from '../../assets/images/location_green.png';
import clock from '../../assets/images/clock.png';
const Card = () => {
    const { card, wrap_img, wrap_information, wrap_icon, wrap_location } = styles;
    return (
        <div className={card}>
            <div className={wrap_img}>
                <img src="https://picsum.photos/id/684/600/400" alt="" />
            </div>
            <p>
                天長地久橋
            </p>
            <div className={wrap_information}>
                <div className={wrap_icon}>
                    <div className={wrap_location}>
                        <img src={location_green} alt="" />
                        嘉義縣
                    </div>
                    <div className="wrap_clock">
                        <img src={clock} alt="" />
                        每日開放
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card