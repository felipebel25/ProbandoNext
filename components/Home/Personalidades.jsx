import React from 'react'
// import Button from './Button';
import styles from '../,,/../../styles/components/home/personalidades.module.css'

const Personalidades = () => {
  return (
    <div id="about" className={`${styles.personalidades} section`}>
    <div className={styles.personalidades__container}>
      <div className={styles.personalidades__title}>
        <h2>Hay <em>12</em> tipos de personalidades <em>financieras</em></h2>
        <h2>¿Cual eres tu?</h2>
      </div>
      <div className="imgiphone">
      </div>
      <p>Realice la prueba financiera gratuita de Aura para averiguar qué tan saludable se siente desde el punto de
        vista financiero y qué tipo de finanzas tiene.</p>
      <div className={styles.container__button__personalidades}>
        {/* <Button contenido='Proximamente' /> */}
      </div>
    </div>
  </div>
  )
}

export default Personalidades