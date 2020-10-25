import React, { useState } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import HamburguerToX from "./HamburguerToX";
import styles from "./style/Navbar.module.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [hamburguerIsClicked, setHamburguerIsClicked] = useState(false);
  const [configMenuClicked, setConfigMenuClicked] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 960) {
      setShowMenu(false);
      setHamburguerIsClicked(false);
    }
    if (window.innerWidth <= 768) {
      setConfigMenuClicked(false);
    }
  });

  return (
    <nav className={styles.Nav}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <i className={cx("fas fa-home", styles.logoImg)}></i>
        </div>

        <ul className={styles.navMenu}>
          <Link to={"/home"}>
            <li className={styles.navItem}>Principal</li>
          </Link>
          <Link to={"/myevents"}>
            <li className={styles.navItem}>Meus Eventos</li>
          </Link>
          <Link to={"/myperfil"}>
            <li className={styles.navItem}>Meu Perfil</li>
          </Link>
          <div
            className={styles.navbarBtn}
            onClick={() => setConfigMenuClicked(!configMenuClicked)}
          >
            <span className={styles.navbarBtnText}>S</span>
          </div>

          <div
            className={cx(styles.configMenu, {
              [styles.configMenuActive]: configMenuClicked,
            })}
          >
            <ul className={styles.configMenuList}>
              <li className={styles.configMenuItem}>item 1</li>
              <li className={styles.configMenuItem}>item 2</li>
              <li className={styles.configMenuItem}>item 3</li>
            </ul>
          </div>
        </ul>
        <HamburguerToX
          hamLineHeight={5}
          hamColor={"white"}
          hamContainerSize={30}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          hamburguerIsClicked={hamburguerIsClicked}
          setHamburguerIsClicked={setHamburguerIsClicked}
        />

        <div className={cx(styles.sideMenu, { [styles.menuActive]: showMenu })}>
          <ul>
            <li className={styles.sideMenuItem}>Principal</li>
            <li className={styles.sideMenuItem}>Meus Eventos</li>
            <li className={styles.sideMenuItem}>Meu Perfil</li>
            <li className={styles.sideMenuItem}>Categorias</li>
            <div className={styles.btnContainer}>
              <button className={styles.sideMenuBtn}>Sair</button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
