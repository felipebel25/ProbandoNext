import { useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/components/home/Banner.module.css";
const Banner = ({ countryName = "bo", modalCountry }) => {
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
                        <br />
                        <p>
                          Porque sabemos que en compañía todo es mejor,<strong> AURA App </strong>
                          estará a tu lado durante toda tu vida financiera. <br />
                          <br />
                          Ahorra, invierte e incluso solicita un crédito sin
                          esfuerzo y de forma automática.
                        </p>
                      </div>

                      <div id="button--intro1">
                        <div className={styles.banner__button}>
                          <span className={styles.banner__buttonfree}>
                            ¡ Es Gratis !   
                          </span>
                          <button
                            onClick={() => {
                              modalCountry((s) => !s);
                            }}
                          >
                            Registrate
                          </button>
                        </div>
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
                      className={styles.rightimage}
                      width="710px"
                      height="620px"
                      layout="raw"
                      src="/group_18.png"
                      priority
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
/*darle espacio al gratis!  - */ 