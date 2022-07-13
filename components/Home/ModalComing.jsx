import React from "react";
import styles from "../../styles/components/home/modalcoming.module.css";
const ModalComing = ({ closemodal }) => {
  return (
    <>
      <div className={styles.closemodal}  onClick={()=>{closemodal(s => !s)}} />
      <div className={styles.modalcoming}>
        <main className={styles.modalcoming__main}>
          <p>Próximamente abriremos el registro en tu país</p>
          <button onClick={()=>{closemodal(s => !s)}}>Cerrar</button>
        </main>
      </div>
    </>
  );
};
/* bandera por default cursor pointer*/
export default ModalComing;