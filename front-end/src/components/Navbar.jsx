import React, { useState } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import HamburguerToX from "./HamburguerToX";
import styles from "./style/Navbar.module.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [hamburguerIsClicked, setHamburguerIsClicked] = useState(false);
  const [configMenuClicked, setConfigMenuClicked] = useState(false);
  const [categoriesMenuOpen, setCategoriesMenuOpen] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
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
          <Link to={"/home"}>
            <i className={cx("fas fa-home", styles.logoImg)}></i>
          </Link>
        </div>

        <ul className={styles.navMenu}>
          <Link to={"/home"}>
            <li className={styles.navItem}>Principal</li>
          </Link>
          <Link to={"/myevents"}>
            <li className={styles.navItem}>Meus Eventos</li>
          </Link>
          <Link to={"/profile"}>
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
          <ul className={styles.sideMenuList}>
            <Link to={"/home"}>
              <li className={styles.sideMenuItem}><i className={cx("fab fa-stripe-s", styles.sideMenuIcons)}></i>Principal</li></Link>
            <Link to={"/myevents"}>
              <li className={styles.sideMenuItem}><i className={cx("fas fa-calendar-alt", styles.sideMenuIcons)}></i>Meus Eventos</li>
            </Link>
            <Link to={"/profile"}>
              <li className={styles.sideMenuItem}><i className={cx("fas fa-user", styles.sideMenuIcons)}></i>Meu Perfil</li>
            </Link>
            <li
              className={styles.sideMenuItem}
              onClick={(e) => setCategoriesMenuOpen(!categoriesMenuOpen)}
            >
              Categorias{" "}
              <i className={cx("fas fa-th", styles.sideMenuIcons)}></i>
              <i
                className={cx("fas fa-chevron-right", styles.categoriesIcon, {
                  [styles.categoriesIconActive]: categoriesMenuOpen,
                })}
              ></i>
            </li>

            <div
              className={cx(styles.categoriesMenu, {
                [styles.categoriesMenuActive]: categoriesMenuOpen,
              })}
            >
              <ul className={styles.categoriesMenuList}>
                <li className={styles.categoriesMenuItem}>Esportes</li>
                <li className={styles.categoriesMenuItem}>Idioma</li>
                <li className={styles.categoriesMenuItem}>Música</li>
                <li className={styles.categoriesMenuItem}>Auto ajuda</li>
                <li className={styles.categoriesMenuItem}>Tecnologia</li>
                <li className={styles.categoriesMenuItem}>Arte</li>
              </ul>
            </div>

            <div
              className={cx(styles.btnContainer, {
                [styles.btnContainerActive]: categoriesMenuOpen,
              })}
            >
              <button className={styles.sideMenuBtn}>Sair</button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
