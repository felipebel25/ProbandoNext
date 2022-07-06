import { useState } from "react";
import Head from "next/head";
import mockupAppAura from "../../assets/images/mockup_banner-mobile.png";
import FirstSection from "../../components/mipyme/FirstSection";
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
          <meta name="description" content="Nuestro objetivo es ayudarte a crecer tu negocio con servicios financieros a tu medida" />
          <meta property="og:title" content="Servicios financieros para la miPYME | AURA Financial"></meta>
          <meta property="og:description" content="Nuestro objetivo es ayudarte a crecer tu negocio con servicios financieros a tu medida"></meta>
          <meta property="og:image" content="../../assets/landing_screenshot.png" />

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
            imageUrl={mockupAppAura}
          />
        </main>
      </div>
    </>
  );
};

export default about;
