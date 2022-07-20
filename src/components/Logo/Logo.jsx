import React, { useState } from 'react'
import styles from './logo.module.scss';
import toggle from '../../assets/images/toggle.png';
const Logo = ({ logoValueFunction }) => {
    const { wrap_logo, logo, wrap_toggle } = styles
    return (
        <div className={wrap_logo}>
            <button className={wrap_toggle} onClick={logoValueFunction}
            >
                <img src={toggle} alt="toggle" />
            </button>
            <h2 className={logo} >
                travel
            </h2>
        </div>

    )
}

export default Logo