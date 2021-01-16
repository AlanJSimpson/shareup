import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterComponent';
import data from './userData';
import cx from 'classnames';
import BoxEvents from '../components/BoxEvents';
import fakeData from './fakeData';

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className={styles.profile}>
        <div className={styles.user}>
          <div className={styles.userLeft}>
            <div className={styles.avatarContainer}>
              <Link to="/home">
                <span className={styles.backArrow}>
                  <i className="fas fa-arrow-left"></i>
                </span>
              </Link>
              <div style={{ backgroundImage: `url(${data[0].photo})` }} className={styles.avatar}></div>
              <Link to="/user/profile/edit">
                <span className={styles.editIcon}>
                  <i className="fas fa-pen"></i>
                </span>
              </Link>
            </div>
            <div className={styles.userInfo}>
              <span>{data[0].name}</span>
              <span className={styles.userEmail}>
                <i className={cx('far fa-envelope', styles.userEmailIcon)}></i>
                {data[0].email}
              </span>
            </div>
          </div>
          <div className={styles.userRight}>
            <h3 className={styles.aboutMe}>Sobre Mim</h3>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quo temporibus a enim veniam dolore
              inventore impedit quasi voluptas modi praesentium, ipsa excepturi amet est placeat.?
            </p>
          </div>
        </div>
        <BoxEvents content={fakeData[0]}>Eventos Criados</BoxEvents>
      </div>
      <Footer />
    </>
  );
}
