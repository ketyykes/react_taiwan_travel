import React from 'react'
import styles from './logo.module.scss';
import toggle from '../../assets/images/toggle.png';
const Logo = () => {
    const { wrap_logo, logo, wrap_toggle } = styles
    return (
        <div className={wrap_logo}>
            <div className={wrap_toggle}
            >
                <img src={toggle} alt="toggle" />
            </div>
            <h2 className={logo} >
                travel
            </h2>
        </div>

    )
}

export default Logo