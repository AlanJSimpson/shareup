import React from 'react';
import styles from './Event.module.css';

function Event({ title, instructor, date, time, image }) {

    return (
        <div className={styles.eventContainer}>
            <div style={{ backgroundImage: `url(${image})` }} className={styles.eventImg}></div>
            <div className={styles.eventTitle}>{title}</div>
            <div className={styles.eventInstructor}>Instrutor: {instructor}</div>
            <div className={styles.eventDateContainer}>
                <span className={styles.eventDate}>Data: {date}</span>
                <span className={styles.as}>às</span>
                <span className={styles.eventTime}>{time}</span>
            </div>
        </div>
    )
}

export default Event
