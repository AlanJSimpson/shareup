import React from 'react';
import styles from './Home.module.css';
import Navbar from '../components/Navbar';

function Home() {
    return (
        <>
            <Navbar />
            <div className={styles.home}>
                home
            </div>
        </>
    )
}

export default Home
