import React from 'react'
// import Button from './Button'

import styles from '../../styles/components/home/ahorro.module.css'
const AhorroInversion = ({ countryName, modalCountry }) => {
    const validacionCountry = countryName === 'bo' ? 'Bolivia' : countryName === 'mx' ? 'México' : countryName === 'co' ? 'Colombia' : ""

    return (
        <div className={styles.AhorrroInversion}>
            <div className={styles.AhorrroInversion__texto}>
                <p className={styles.AhorroInversion__subline}>AHORRO E INVERSIÓN</p>
                <h2>Haz más con tu dinero</h2>
                <p>Todo el mundo debería obtener más de su dinero, invertirlo para el futuro sin esfuerzo, con una estrategia a
                    largo plazo y al mínimo coste.<br /> <br /> Ponemos tu dinero en modo <em>"turbo"</em>.</p>
                <div className={styles.AhorroInversion__button}>

                    {/* {validacionCountry === 'Bolivia' ?
                        <Button clases={'left'} click={(() => {modalCountry(true)})} />


                        :
                        <Button clases={'left'} click={(() => { console.log('1') })} />
                    } */}
                </div>
            </div>
            <div className={styles.AhorrroInversion__phone}>
                <img src='/ahorro.png' alt='mockup de nuestra app' />
            </div>
        </div>

    )
}

export default AhorroInversion