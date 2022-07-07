import React from 'react'
import styles from '../../styles/components/home/Mision.module.css'

const Mision = () => {
    return (

        <div className={styles.mision} id='mision' >
            <div className={styles.mision__container} >
                <div className={styles.mision__image} >
                    <img src='/coinjar.jpg' alt={'planta'} />
                </div>
                <div className={styles.mision__text}>
                    <p  className="mision--p">NUESTRA MISIÓN</p>
                    <h2 className="mision--info">Que todos puedan dar forma a su futuro financiero, con el conocimiento necesario e independiente de sus activos financieros.</h2>
                </div>
            </div>
        </div>
    )
}

export default Mision