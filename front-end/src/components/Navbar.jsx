import React, { useState } from 'react'
import styles from './Navbar.module.css'
import cx from 'classnames'
import HamburguerToX from './HamburguerToX'

function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const [hamburguerIsClicked, setHamburguerIsClicked] = useState(false)

    window.addEventListener('resize', e => {
        if (window.innerWidth >= 960) {
            setShowMenu(false);
            setHamburguerIsClicked(false)
        }
    })

    return (
        <nav className={styles.Nav}>
            <div className={styles.navbarContainer}>
                <div className={styles.logoContainer}>
                    <i className={cx("fas fa-caravan", styles.logoImg)}></i>
                    
                    <div className={styles.logo}>Home</div>
                </div>

                <ul className={styles.navMenu}>
                    <li className={styles.navItem}>Produtos</li>
                    <li className={styles.navItem}>Servicos</li>
                    <li className={styles.navItem}>Sobre</li>
                    <button className={styles.navbarBtn}>Sign Up</button>
                        
                </ul>
                <HamburguerToX hamLineHeight={5} hamColor={'white'} hamContainerSize={30} showMenu={showMenu} setShowMenu={setShowMenu} hamburguerIsClicked={hamburguerIsClicked} setHamburguerIsClicked={setHamburguerIsClicked} />

                <div className={cx(styles.sideMenu, { [styles.menuActive]: showMenu })}>
                    <ul >
                        <li className={styles.sideMenuItem}>Produtos</li>
                        <li className={styles.sideMenuItem}>Servicos</li>
                        <li className={styles.sideMenuItem}>Sobre</li>
                        <div className={styles.btnContainer}>
                            <button className={styles.sideMenuBtn}>Sign Up</button>
                        </div>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
