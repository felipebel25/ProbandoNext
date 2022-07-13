import React, { useEffect } from "react";

import styles from "../styles/components/emailslanding.module.css";
import Header from "./Navbar/Header";
import { useRouter } from "next/router";
import Head from "next/head";

const EmailsLanding = ({
  title,
  text,
  notFound,
  socialMedias,
  timeReturnHome,
}) => {
  let router = useRouter();
  // const socialAnalytics = (socialMedia) => {
  //     eventAnalytics({
  //         name:socialMedia,
  //         action: `${socialMedia} button`,
  //         category: "redes sociales"
  //     })
  // }
  const countryName = router.pathname;
  const validationCountry = countryName.includes("bo")
    ? "/bo"
    : countryName.includes("mx")
    ? "/mx"
    : countryName.includes("co")
    ? "/co"
    : '/';

  useEffect(() => {
    {
      timeReturnHome &&
        setTimeout(() => {
          router.replace(validationCountry);
        }, timeReturnHome);
    }
  }, []);
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <Header />
      <div className={styles.emailverification}>
        <main className={styles.emailverification__container}>
          <div className={styles.emailverification__container__texto}>
            <h2>{title}</h2>
            <p className={styles.emailverification__p}>{text}</p>
            <button
              onClick={() => {
                router.replace(validationCountry);
              }}
              className={styles.email__container__button}
            >
              Regresar al Inicio
            </button>
            {socialMedias ? (
              <div className={styles.email__socials}>
                <p className={styles.email__socials__follow}>Siguenos en</p>
                <div className={styles.email__socials__imgs}>
                  <a
                    onClick={() => {
                      //   socialAnalytics("Instagram");
                    }}
                    href="https://www.instagram.com/aura.financial/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/instagram__purple.svg" alt="icono instagran" />
                    <p className={styles.email__img__text}>Instagram</p>
                  </a>
                  <a
                    onClick={() => {
                      //   socialAnalytics("Facebook");
                    }}
                    href="https://www.facebook.com/aura.Bolivia01"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/facebook__purple.svg" alt="icono facebook" />
                    <p className={styles.email__img__text}>Facebook</p>

                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {!notFound ? (
            <div className={styles.emailverification__container__img}>
              <img src="/plane-email.png" alt="imagen de papel" />
            </div>
          ) : (
            <div className={styles.emailverification__container__404}>
              <img src="/404bg.png" alt="404 image" />
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default EmailsLanding;
