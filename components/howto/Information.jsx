import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../Home/Footer";

const Information = ({}) => {
  const router = useRouter();
  const validateRoute =
    router.query.pais === "co"
      ? "/co"
      : router.query.pais === "bo"
      ? "/bo"
      : "/mx";
  const validateCountry =
    router.query.pais === "co"
      ? "Colombia"
      : router.query.pais === "bo"
      ? "Bolivia"
      : "Mexico";

  return (
    <>
      <Head>
        <title>Como lo Hacemos | Aura Financial {validateCountry} </title>
      </Head>
      <div className="finance information">
        <div className="container--titulos">
          <div className="row">
            <div className="col-lg-8 offset-lg-2-3">
              <div
                className="section-heading  wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <p>LA APLICACIÓN FINANCIERA HOLÍSTICA</p>
                <h3>Siéntete bien con tu futuro financiero.</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="financial__container">
          <div className="financial__title">
            <h3>Tu vida financiera perfectamente equilibrada</h3>
          </div>
          <div className="financial__image"></div>
        </div>
        <div className="financial__section2">
          <div className="financial__morado">
            <h3>Tareas concretas para que puedas avanzar</h3>
            <img src="/notice.png" />
          </div>
          <div className="financial__white">
            <h3>Descubre tu potencial financiero</h3>
            <img src="/Group 35 (1).png" />
          </div>
        </div>
        <div className="financial__ahorro">
          <div className="financial__ahorro--image">
            <img src="/Group 37.png" />
          </div>
          <div className="financial__ahorro--texto">
            <h3>Cajitas para cada objetivo. Pero con ganancias.</h3>
          </div>
        </div>

        <div className="financial__notices">
          <div className="financial__notices--box">
            <div className="notices__images">
              <img src="/noticiasmanos.png" />
            </div>
            <p>Tome decisiones con el conocimiento de expertos financieros</p>
          </div>
          <div className="financial__notices--box">
            <div className="notices__images">
              <img src="/Group 40.png" />
            </div>
            <p>
              Información y consejos individuales para toda su vida financiera
            </p>
          </div>
          <div className="financial__notices--box">
            <div className="notices__images">
              <img src="/Group 41.png" />
            </div>
            <p>Respuestas personales a todas sus preguntas financieras</p>
          </div>
        </div>
        {validateRoute === "bo" ? (
          ""
        ) : (
          <div className="financial__app">
            <div className="financial__app--texto">
              <h2>Un Banco? No algo mejor</h2>
              <p>
                Aura es la aplicación holística para su vida financiera, con
                asesoramiento personal e inversiones automatizadas.
              </p>
            </div>
            <div className="financial__app--image">
              <img src="/Group_44-removebg.png" />
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Information;
