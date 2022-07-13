import React from "react";
import styles from "../../styles/components/home/comofunciona.module.css";
import Image from "next/image";
const ComoFunciona = ({ countryName = "bo", modalCountry }) => {
  const validacionCountry =
    countryName === "bo"
      ? "bo"
      : countryName === "mx"
      ? "mx"
      : countryName === "co"
      ? "co"
      : "";

  return (
    <div id="comolohacemos" className={styles.comoFunciona}>
      <div
        className={`${styles.comolohacemos__title} wow fadeInDown animated mb`}
      >
        <h2 className={styles.title__estrategies}>
          La forma más rápida de lograr salud financiera de manera inteligente
        </h2>
      </div>
      <div className={styles.comoFunciona__list}>
        <div className={styles.comoFunciona__ul}>
          <div className={styles.comoFunciona__item}>
            <Image
              layout="raw"
              width="100px"
              height="50px"
              src="/checkbullet.svg"
              alt={"check o palomita"}
            />
            <p>Conoce tu perfil crediticio.</p>
          </div>
          <div className={styles.comoFunciona__item}>
            <Image
              layout="raw"
              width="100px"
              height="50px"
              src="/checkbullet.svg"
              alt={"check o palomita"}
            />
            <p>Recibe tips de educación financiera.</p>
          </div>
          <div className={styles.comoFunciona__item}>
            <Image
              layout="raw"
              width="100px"
              height="50px"
              src="/checkbullet.svg"
              alt={"check o palomita"}
            />
            <p>Arma tu expediente digital.</p>
          </div>
          <div className={styles.comoFunciona__item}>
            <Image
              layout="raw"
              width="100px"
              height="50px"
              src="/checkbullet.svg"
              alt={"check o palomita"}
            />
            <p>
              Recibe recomendaciones claras sobre tasas de ahorro y productos
              financieros adecuados a tu perfil.
            </p>
          </div>
          <div className={styles.comoFunciona__item}>
            <Image
              layout="raw"
              width="100px"
              height="50px"
              src="/checkbullet.svg"
              alt={"check o palomita"}
            />
            <p>Toma decisiones relevantes para tu futuro.</p>
          </div>
          <div className={styles.comoFunciona__buttons}>
              <button
                onClick={() => {
                  modalCountry(true);
                }}
                className={styles.clients__button__list}
              >
                Registrate
              </button>
         

            <a href={`/${validacionCountry}/howto`}>
              <button className={styles.clients__button__list}>
                Conoce Más
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComoFunciona;
