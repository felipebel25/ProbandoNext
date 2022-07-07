import React from "react";
import styles from '../../styles/components/landing/FourhSection.module.css'
const FourdSection = ({ openModal }) => {
  return (
    <section className={styles.section__fourth}>
      <div className={styles.landing__fourth}>
        <h2>
          Descubre por qué los <br />
          emprendedores y comerciantes aman AURA
        </h2>
        <p>
          Nos respalda un increíble equipo que entiende que las miPYMES son las
          originadoras del desarrollo y creadoras de empleo en la economía
          Boliviana.
        </p>
        <h5>Nuestro objetivo es que tu negocio crezca.</h5>
        <button
          onClick={() => {
            openModal(true);
          }}
          className={styles.section__fourth__button }
        >
          Registra tu negocio
        </button>
      </div>
    </section>
  );
};

export default FourdSection;
