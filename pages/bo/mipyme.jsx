import { useState } from "react";
import Head from "next/head";
import FirstSection from "../../components/mipyme/FirstSection";
import SecondSection from "../../components/mipyme/SecondSection";
import OneSection from "../../components/mipyme/OneSection";
const about = () => {
  const [modalCountry, setModalCountry] = useState(false);
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
          ></meta>
          <meta
            property="og:description"
            content="Nuestro objetivo es ayudarte a crecer tu negocio con servicios financieros a tu medida"
          ></meta>
          <meta property="og:image" content="/landing_screenshot.png" />
        </Head>
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
              imageUrl='/01.kyc.png'
              openModal={setModalCountry}
            />
          </main>
        </main>
      </div>
    </>
  );
};

export default about;
