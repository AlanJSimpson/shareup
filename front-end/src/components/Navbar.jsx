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
                    <i className={cx("fas fa-home", styles.logoImg)}></i>
                </div>

                <ul className={styles.navMenu}>
                    <li className={styles.navItem}>Principal</li>
                    <li className={styles.navItem}>Meus Eventos</li>
                    <li className={styles.navItem}>Meu Perfil</li>
                    {/* <button className={styles.navbarBtn}>Sair</button> */}
                    <div className={styles.navbarBtn}><span className={styles.navbarBtnText}>S</span></div>
                </ul>
                <HamburguerToX hamLineHeight={5} hamColor={'white'} hamContainerSize={30} showMenu={showMenu} setShowMenu={setShowMenu} hamburguerIsClicked={hamburguerIsClicked} setHamburguerIsClicked={setHamburguerIsClicked} />

                <div className={cx(styles.sideMenu, { [styles.menuActive]: showMenu })}>
                    <ul >
                        <li className={styles.sideMenuItem}>Principal</li>
                        <li className={styles.sideMenuItem}>Meus Eventos</li>
                        <li className={styles.sideMenuItem}>Meu Perfil</li>
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
