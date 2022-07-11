import React from 'react';
import styles from '../styles/components/home/rotateScreen.module.css'
const RotateScreen = () => {
    return (
        <div className={styles.Score__landscape} >
            Gira tu dispositivo para tener una mejor experiencia
            <img src='/girar-pantalla.svg' alt="rotate screen" />
        </div>

    )
}

export default RotateScreen;
