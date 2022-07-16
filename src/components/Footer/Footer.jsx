import React from 'react'
import styles from './footer.module.scss'
const Footer = () => {
    console.log(styles);
    // console.log(styles);
    const { footer } = styles;
    return (
        <footer className={footer}>
            TAIWAN TRAVEL
        </footer>
    )
}

export default Footer