import React from 'react'
import styles from '../../styles/components/home/credito.module.css'
// import Button from './Button';
const Credito = ({ countryName, modalCountry }) => {
    const validacionCountry = countryName === 'bo' ? 'Bolivia' : countryName === 'mx' ? 'México' : countryName === 'co' ? 'Colombia' : ""


    return (
        <div className={styles.credito}>
            <div className={styles.credito__time}>
                <div className={styles.credito__time__phone}>
                    <img src='Nonbanked_segment.png' alt="" />
                </div>
                <div className={styles.credito__texto}>
                    <p className={styles.credito__subline}>CRÉDITO</p>
                    <h2>Haz realidad tus sueños</h2>
                    <p>El acceso a crédito y otros servicios financieros debería ser universal e inclusivo, independiente de si cuentas con historial financiero. Ya sea que quieras iniciar un negocio, crecerlo, financiar la educación de tus hijos, atender tu salud y más. Todo esto de acuerdo a tu perfil y a tasas justas.</p>
                    <div className={styles.credito__button}>
                        {/* {validacionCountry === 'Bolivia' ?
                            <Button clases={'left'} click={modalCountry} />
                            :
                            <Button clases={'left'} />
                        } */}
                        <p>- ¡ Es Gratis !</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Credito