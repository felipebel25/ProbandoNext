import React from 'react'
import styles from '../../styles/components/landing/OneSection.module.css'
const OneSection = ({ number, title, text, buttonText, imageUrl, openModal }) => {
    return (
        <section className={styles.section__third}>
            <h4 className={styles.landing__01__h4}>{number}</h4>
            <div className={styles.landing__01}>
                <div className={styles.landing__01__container}>
                    <div className={styles.landing__circle__numbers}>
                        <img src={imageUrl} alt="" className='landing__circle--image' />
                    </div>
                    <div className={styles.landing__opurtunites}>
                        <h2 >{title}</h2>
                        <p>{text}</p>
                        <button onClick={() => {
                            openModal(true)
                        }} className={styles.landing__button}>{buttonText} </button>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default OneSection