import React from 'react'
import styles from '../../styles/components/landing/SecondSection.module.css'

const SecondSection = ({ title, text, imageUrl }) => {
    return (
        <main className={styles.section__two__container }>
            <section className={styles.section__two }>
                <div className={styles.landing__two__text}>
                    <div className={styles.landing__two__title}>
                        <p>Lo que tu negocio necesita</p>
                        <h2>¿Por qué AURA?</h2>
                    </div>
                    <div className={styles.landing__two__container}>
                        <div className={styles.landing__circle}>
                            <img src={imageUrl} alt="" />
                        </div>

                        <div className={`${styles.landing__opurtunites}`}>
                            <h2>{title}</h2>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SecondSection
