import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterComponent';
import styles from './EditProfile.module.css';
import BoxEvents from '../components/BoxEvents';
import data from './userData';
import cx from 'classnames';
const { title, instructor, date, time, image } = {
    id: 1,
    title: 'Piano',
    instructor: 'Miguel',
    date: '25/11',
    time: '20:00',
    image: '../images/piano.png'
}

export default function EditProfile() {
    return (
        <>
            <Navbar />
            <div className={styles.EditProfile}>
                <div className={styles.avatarContainer}>
                    <Link to='/profile'><span className={styles.backArrow}><i className="fas fa-arrow-left"></i></span></Link>
                    <div style={{ backgroundImage: `url(../images/joao.jpeg` }} className={styles.avatar}></div>
                    <Link to='/profile/edit'><span className={styles.camera}><i class="fas fa-camera"></i></span></Link>
                </div>
                <h3 className={styles.infoTitle}>Informações pessoais:</h3>

                <form className={styles.formContainer} action="">
                    <input placeholder='Nome' type="text" />
                    <input placeholder='Cidade' type="text" />
                    <input placeholder='Email' type="email" />
                    <textarea rows="7" cols="50"></textarea>
                </form>
                <div className={styles.boxEventsContainer}>
                    <i className={cx("fas fa-plus-circle", styles.plusIcon)}></i>
                    <BoxEvents content={{ title, instructor, date, time, image }}>Eventos Criados</BoxEvents>
                </div>
                <button className={styles.saveBtn}>Salvar Alterações</button>
            </div>
            <Footer />
        </>
    )
}
