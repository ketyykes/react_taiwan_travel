import React from 'react'
import SideBar from '../../components/SideBar/SideBar';
import Banner from '../../components/Banner/Banner';
import ThemeCard from '../../components/ThemeCard/ThemeCard'
import Footer from '../../components/Footer/Footer'
import styles from './homepage.module.scss';


const HomePage = () => {
    const { homepage, wrap_baneer_content_footer } = styles;
    return (
        <div className={homepage}>
            <SideBar />
            <div className={wrap_baneer_content_footer}>
                <Banner />
                <ThemeCard />
                <ThemeCard />
                <ThemeCard />
                <ThemeCard />
                <Footer />
            </div>
        </div>
    )
}

export default HomePage