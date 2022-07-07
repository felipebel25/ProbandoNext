import React from 'react'
// import PropTypes from 'prop-types'

// import Button from './Button';

import styles from  '../../styles/components/home/servicios.module.css'


const Servicios = ({countryName , modalCountry}) => {
    const validacionCountry = countryName === 'bo' ? 'Bolivia' : countryName === 'mx' ?  'México' : countryName === 'co' ? 'Colombia' :""
  
    return (
        <div className={styles.servicios}>
            <div className=" wow fadeInDown animated">
                <h3 className="title--estrategies" id='title--bottom'>Accede a los mejores productos financieros de {validacionCountry}</h3>
                <p>Confiables y adecuados según tu perfil.</p>
            </div>
            <div className={styles.servicios__container}>
                <div className={styles.servicios__list}>
                    <div className={styles.servicios__list__item }>
                        <img src='/cash 1.svg' alt='moneda'/>
                        <p>Inversiones</p>
                    </div>
                    <div className={styles.servicios__list__item }>
                        <img src='/person.svg' alt='persona'  />
                        <p>Préstamos personales</p>
                    </div>

                    <div className={styles.servicios__list__item }>
                        <img src='/securityheart 1 (1).svg'  alt='seguro de vida'  />
                        <p>Seguros de vida y gastos médicos</p>
                    </div>
                    <div className={styles.servicios__list__item }>
                        <img src='/car.svg' alt='carro' />
                        <p>Créditos y seguros de auto</p>
                    </div>

                    <div className={styles.servicios__list__item }>
                        <img src='/home 1.svg' alt='hipotecas casas' />
                        <p>Hipotecas</p>
                    </div>

                    <div className={styles.servicios__list__item }>
                        <img src='/creditcard.svg' alt='creditos'/>
                        <p>Tarjetas de crédito</p>
                    </div>
                    
                    {/* {validacionCountry === 'Bolivia' ?
                            <Button clases={"title__button--si"} contenido='¡Quiero Aura!' click={()=>{modalCountry(true)}}></Button>
                            :
                            <Button clases={"title__button--si"} contenido='¡Quiero Aura!' ></Button>
                        } */}
                </div>
                <div className={styles.servicios__image}>
                    <img src={countryName === 'bo' ? '/mockupAppAura.png' : '/banksmex.png'} alt='imagen de telefono con bancos app aura' />
                </div>
            </div>
        </div>
    )
}


export default Servicios