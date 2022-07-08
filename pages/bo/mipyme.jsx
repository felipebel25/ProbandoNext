import { useState, useEffect } from "react";
import Head from "next/head";
import FirstSection from "../../components/mipyme/FirstSection";
import SecondSection from "../../components/mipyme/SecondSection";
import OneSection from "../../components/mipyme/OneSection";
import TwoSection from "../../components/mipyme/TwoSection";
import FourdSection from "../../components/mipyme/FourthSection";
import HeaderMyPyme from "../../components/Navbar/HeaderPyme";
const about = () => {
  const [modalCountry, setModalCountry] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);

  return (
    <>
      <div className="aurasocials">
        <Head>
          <title>Aura Information | AURA Financial</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="Nuestro objetivo es ayudarte a crecer tu negocio con servicios financieros a tu medida"
          />
          <meta
            property="og:title"
            content="Servicios financieros para la miPYME | AURA Financial"
          />
          <meta
            property="og:description"
            content="Nuestro objetivo es ayudarte a crecer tu negocio con servicios financieros a tu medida"
          />
          <meta property="og:image" content="/landing_screenshot.png" />
        </Head>
        <HeaderMyPyme />
        <main className="landing">
          <FirstSection
            openModal={setModalCountry}
            title={
              "La aplicación de finanzas personales hecha para ti y tu negocio miPYME"
            }
            text={
              "Aprende como controlar tus finanzas personales ahorrar, invertir e incluso como obtener un crédito para tu negocio."
            }
            textButton={"Registra tu negocio "}
            imageUrl="/mockup_banner-mobile.png"
          />
          <SecondSection
            title={`Las oportunidades 
            para tu negocio deben ser 
            transparentes y democráticas`}
            text={`Estamos convencidos de que todos deben dar forma a su
            futuro financiero. Estaremos a tu lado en todo el camino
            de la vida financiera de tu negocio.`}
            imageUrl={"/A.porqueAURA.png"}
          />
          <main className="landing__sections">
            <h2 className="landing__sections--title">¿Como funciona?</h2>
            <OneSection
              number={"01"}
              title={"Cuéntanos de ti"}
              text={
                "Con tu información y la de tu negocio ayudaremos a armar tu expediente financiero."
              }
              buttonText={"Regístrate"}
              imageUrl="/01.kyc.png"
              openModal={setModalCountry}
            />
            <TwoSection
              number={"02"}
              title={"Conoce tu perfil crediticio"}
              text={
                "Descubre tu reporte de InfoCred, aprende como se interpreta, como puedes mejorarlo y sacar lo mejor de él."
              }
              buttonText={"Quiero AURA"}
              imageUrl={"/02.score.png"}
              openModal={setModalCountry}
            />
            <OneSection
              title={"Recibe tips de educación financiera"}
              text={
                "De manera periódica recibirás mensajes cortos para tener bajo control tus finanzas personales y las de tu negocio."
              }
              number={"03"}
              buttonText={"Regístrate"}
              imageUrl="/03.tips.png"
              openModal={setModalCountry}
            />

            <TwoSection
              title={"Conoce los servicios financieros"}
              text={
                "En la palma de la mano, recibe recomendaciones claras sobre servicios de crédito disponibles en el mercado, sus tasas de interés y productos de inversión, que hagan sentido con tus requerimientos y perfil."
              }
              number={"04"}
              buttonText={"Regístrate"}
              imageUrl="/04.Serv_fin.png"
              openModal={setModalCountry}
            />
            <OneSection
              title={"Toma decisiones que ayuden a crecer tu negocio"}
              text={
                "Con tu perfil financiero, el conocimiento de como manejar mejor tus finanzas y con los servicios financieros que se ajustan a tus necesidades, podrás tomar la mejor decisión de como hacer crecer tu negocio. "
              }
              number="05"
              buttonText={"Regístrate"}
              imageUrl="/05.Toma_de_dec.png"
              openModal={setModalCountry}
            />
          </main>
          <FourdSection></FourdSection>
        </main>
      </div>
    </>
  );
};

export default about;
