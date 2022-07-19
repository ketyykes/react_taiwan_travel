import React from 'react'
import styles from './themecard.module.scss';
import Card from '../Card/Card';
import location_purple from '../../assets/images/location_purple.png';
import useGetHomePage from '../../hook/useGetHomePage.js'
const ThemeCard = ({ visitType, title }) => {
    const { theme_card, wrap_title, more_point, wrap_card } = styles;
    const scenery = useGetHomePage(visitType);
    const cardComponent = scenery.map(
        (
            // 先將所有解構
            {
                Picture: { PictureUrl1 },
                OpenTime,
                HotelName,
                ScenicSpotName,
                ActivityName,
                RestaurantName,
                Address,
                Phone }
            ,
            index) =>

        (
            <Card
                visitType={visitType}
                picture={PictureUrl1}
                address={Address}
                picture_name={(ScenicSpotName || RestaurantName || ActivityName || HotelName)}
                phone={Phone}
                open_time={OpenTime}
                key={index} />
        )
    )
    return (
        <div className={theme_card}>
            <div className={wrap_title}>
                <h2>
                    <img src={location_purple} alt="" />
                    <span>
                        {title}
                    </span>
                </h2>
                <p className={more_point}>更多熱門景點</p>
            </div>
            <div className={wrap_card}>
                {cardComponent}
            </div>
        </div>
    )
}

export default ThemeCard