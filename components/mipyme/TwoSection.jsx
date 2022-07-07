import React from 'react'
import styles from '../../styles/components/landing/TwoSection.module.css'

const TwoSection = ({ title, text, number, buttonText , imageUrl , openModal }) => {
    return (
        < div className={styles.landing__02}>
                <h4>{number}</h4>
            <div className={styles.landing__02__container}>
                <div className={styles.circle__2}>
                    <img src={imageUrl} alt="" />
                </div>
                <div className={styles.landing__02__text}>
                    <h2 >{title}</h2>
                    <p>{text}</p>
                    <button onClick={() => {
                      openModal(true)
                    }} className={styles.landing__button}>{buttonText} </button>
                </div>
            </div>
        </div >
    )
}

export default TwoSection