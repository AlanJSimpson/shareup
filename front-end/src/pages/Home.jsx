import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Navbar from '../components/Navbar';
import Event from '../components/Event';
const fakeData = require('./fakeData');


function Home() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    let result;

    useEffect(() => {
        (
            async function () {
                try {
                    setIsLoading(true);
                    setEvents(fakeData);

                } catch (error) {
                    console.log(error);
                } finally {
                    setIsLoading(false);
                }
            }
        )()

    }, [])

    if(events.length){
        result = events.map(event => <Event key={event.id} {...event}/>)
    }

    return (
        <>
            <Navbar />
            <div className={styles.home}>
                <div className={styles.logoContainer}>
                    <img className={styles.logoImg} src="images/logo.png" alt="" />
                </div>
                <div className={styles.categoriesMenu}>
                    <ul>
                        <li>Esportes</li>
                        <div className={styles.dividerBar}></div>
                        <li>Idioma</li>
                        <div className={styles.dividerBar}></div>
                        <li>Música</li>
                        <div className={styles.dividerBar}></div>
                        <li>Auto ajuda</li>
                        <div className={styles.dividerBar}></div>
                        <li>Tecnologia</li>
                        <div className={styles.dividerBar}></div>
                        <li>Arte</li>
                    </ul>
                </div>
                <form className={styles.homeForm} action="">
                    <span className={styles.inputIcon}><i className="fas fa-search"></i></span>
                    <input className={styles.homeInput} placeholder='Buscar curso' type="text" name="" id="" />
                </form>

                <div className={styles.eventList}>
                    {isLoading ? <div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div> : result}
                </div>
            </div>
        </>
    )
}

export default Home
