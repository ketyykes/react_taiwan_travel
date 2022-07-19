import React from 'react'
import styles from './card.module.scss'
import location_green from '../../assets/images/location_green.png';
import clock from '../../assets/images/clock.png';
import calling from '../../assets/images/calling.png';
import banner from '../../assets/images/banner.png';

const Card = ({ picture = banner, address, picture_name, open_time = "未提供", visitType, phone }) => {
    const { card, wrap_clock, wrap_img, wrap_information, wrap_icon, wrap_location } = styles;
    return (
        <div className={card}>
            <div className={wrap_img}>
                <img src={picture} alt="" />
            </div>
            <p>
                {picture_name}
            </p>
            <div className={wrap_information}>
                <div className={wrap_icon}>
                    <div className={wrap_location}>
                        <img src={location_green} alt="" />
                        {address}
                    </div>

                    <div className={wrap_clock}>
                        <img src={visitType === "Hotel" ? calling : clock} alt={visitType} />
                        {visitType === "Hotel" ? phone : open_time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card