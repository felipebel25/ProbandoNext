import { useEffect } from "react";
import cellPhone from "../../public/assets/images/Group 18.png";
import Image from "next/image";
import styles from '../../styles/components/Banner.module.css'
const Banner = ({ countryName = "bo" }) => {
  const validacionCountry =
    countryName === "bo"
      ? "Bolivia"
      : countryName === "mx"
      ? "México"
      : countryName === "co"
      ? "Colombia"
      : "";

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }

    new WOW.WOW().init();
  }, []);

  return (
    <>
      
      <div
        className={` wow fadeIn ${styles.banner}`}
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className={styles.container__inicio}>
          <div className="row ">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center padding">
                  <div
                    className={`${styles.leftcontent} show-up header-text wow fadeInLeft `}
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className={styles.future__finance}>
                      <div className="col-lg-12 ">
                        <p className={styles.container__iniciocountry}>
                          En {validacionCountry}
                        </p>
                        <h1 className={styles.title__primary}>
                          Tu futuro financiero,
                          <br />
                          en un solo paso.
                        </h1>
                        <p>
                          Ahorra, invierte e incluso solicita un crédito sin
                          esfuerzo y de forma automática. Asesoramiento
                          financiero personal siempre que lo necesites.
                        </p>
                      </div>

                      <div id="button--intro1">
                        {validacionCountry === "Bolivia" ? (
                          <div className={styles.banner__button}>
                            <span className={styles.banner__buttonfree}>
                              ¡ Es Gratis !
                            </span>
                            <button
                              onClick={() => {
                                console.log("asd");
                              }}
                            >
                              Registrate
                            </button>
                          </div>
                        ) : (
                          <div className={styles.banner__button}>
                            <span className={styles.banner__buttonfree}>
                              ¡ Es Gratis !{" "}
                            </span>
                            <button>Registrate</button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className={`${styles.rightimage} wow fadeInRight`}
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <Image
                      layout='raw'
                      src='/assets/images/Group 18.png'
                      className={styles.rightimage}
                      alt={"mockup de un celular simulando una app"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
/* 
  bajarle el tamano de las banderas
*/
