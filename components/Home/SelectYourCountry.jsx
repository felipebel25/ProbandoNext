import { useRouter } from "next/router";
import { useEffect } from "react";

import styles from "../../styles/components/home/selectcountry.module.css";
const SelectCountryModal = ({ modalCountry }) => {
  let navigate = useRouter();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className={styles.selectcountry}>
      <div
        className={styles.selectcountry__offmodal}
        onClick={() => {
          modalCountry(false);
        }}
      />
      <div className={styles.selectcountry__modal}>
        <div className={styles.selectcountry__modal__close}>
          <button
            onClick={() => {
              modalCountry(false);
            }}
          >
            X
          </button>
        </div>
        <main className={styles.selectcountry__modal__content}>
          <h2>Selecciona tu país</h2>
          <div className={styles.selectcountry__flags}>
            <img
              src="/Bandera_de_Bolivia_(Estado) (1) 1.svg"
              alt=""
              onClick={() => {
                navigate.push("/bo/registro-BO");
              }}
            />
            <p>Bolivia</p>
          </div>
          <div className={styles.selectcountry__flags}>
            <p className={styles.selectcountry__flags__coming}>Próximamente</p>
            <img src="/Flag_of_Mexico 1.svg" alt="" className={styles.coming} />
            <p>Mexico</p>
          </div>
          <div className={styles.selectcountry__flags}>
            <p className={styles.selectcountry__flags__coming}>Próximamente</p>
            <img src="/Flag_of_Colombia 1.svg" alt="" className={styles.coming} />
            <p>Colombia</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SelectCountryModal;
