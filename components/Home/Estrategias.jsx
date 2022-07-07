import Image from 'next/image'
import React from 'react'
import styles from '../../styles/components/home/estrategias.module.css'

const Estrategias = () => {
    return (
        <div id="services" className={`${styles.services} section`}>
            <div className="container title__estrategy--first">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                            <h3 className='title--strategy'>La estrategia <em>adecuada </em> para cada <em>objetivo</em></h3>
                            <Image layout='raw'  width='500px' height='150px' src='/heading-line-dec.png' />
                            <p>Ya sea que quieras construir tu casa, contar con una pensión o planear el presupuesto de tus
                                vacaciones.<br />Con los planes de Aura, sabrás exactamente cómo alcanzar tus metas financieras.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="title--estrategies">La forma más rápida de lograr una planificación financiera increíblemente
                    inteligente</h2>
                <div className="row cards">
                    <div className="col-lg-3 ">
                        <div className={`${styles.service__item} ${styles.first__service}`}>
                            <div className={styles.icon} />
                            <h4>Cuentanos de ti</h4>
                            <p>Y tu situación a través del bot financiero Aura y/o un asesor.</p>
                            <div className="text-button">
                                <span href="#"> <i className="fa fa-arrow-right" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={`${styles.service__item} ${styles.second__service} `}>
                            <div className={styles.icon} />
                            <h4>Conoce tu score y su potencial</h4>
                            <p>Descubre cómo puedes mejorar tu score financiero.</p>
                            <div className="text-button">
                                <span href="#"> <i className="fa fa-arrow-right" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className={`${styles.service__item} ${styles.third__service}`}>
                            <div className={styles.icon} />
                            <h4>Planea para alcanzar tus objetivos</h4>
                            <p>Toma decisiones y planea tus objetivos financieros paso a paso.</p>
                            <div className="text-button">
                                <span href="#"> <i className="fa fa-arrow-right" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className={`${styles.service__item} ${styles.fourth__service}`}>
                            <div className={styles.icon} />
                            <h4>Implementa una estrategia</h4>
                            <p>Obtendras recomendaciones de productos financieros y acciones claras alcanzar tus objetivos.</p>
                            <div className="text-button">
                                <span href="#"> <i className="fa " /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Estrategias