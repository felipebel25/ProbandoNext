import React from 'react'

import styles from '../../styles/components/home/intereses.module.css'
const Intereses = () => {
    return (
        <div className={styles.intereses}>
            <div className={styles.intereses__titulos}>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2-3">
                        <div className="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                            <p>INTERESES ALINEADOS</p>
                            <h2>Pensamos en lo que es importante para ti.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.intereses__cards}>
                <div className={styles.intereses__cards__box}>
                    <h3>Seguridad</h3>
                    <div className={styles.intereses__cards__images}>
                        <img src='/escala.png' alt='graphic '/>
                    </div>
                    <p>Sin falsas promesas. Estrategias y productos con la máxima seguridad.</p>
                </div>
                <div className={styles.intereses__cards__box}>
                    <h3>Tus datos te pertenecen</h3>
                    <div className={styles.intereses__cards__images}>
                        <img src='/candado.png' alt='security' />
                    </div>
                    <p>Con tus datos solo optimizamos nuestras recomendaciones.</p>
                </div>
                <div className={styles.intereses__cards__box}>
                    <h3>Promover conscientemente la sostenibilidad</h3>
                    <div className={styles.intereses__cards__images}>
                        <img src='/corazon.png' alt='heart ' />
                    </div>
                    <p>¿Impacto sostenible y mejorar tus ganancias? Te mostramos como.</p>
                </div>
            </div>
        </div>
    )
}

export default Intereses