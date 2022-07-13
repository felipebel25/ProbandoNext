import { useState, useEffect } from "react";
import Head from "next/head";

import Banner from "../components/Home/Banner";
import Mision from "../components/Home/Mision";
import ComoFunciona from "../components/Home/ComoFunciona";
import Estrategias from "../components/Home/Estrategias";
import Personalidades from "../components/Home/Personalidades";
import AhorroInversion from "../components/Home/AhorroInversion";
import Credito from "../components/Home/Credito";
import Intereses from "../components/Home/Intereses";
import Servicios from "../components/Home/Servicios";
import Header from "../components/Navbar/Header";
import { useRouter } from "next/router";
import Footer from "../components/Home/Footer";
import dynamic from "next/dynamic";
const Dopper = dynamic(() => import("../components/Doppler/Doppler"), {
  ssr: false,
});
const SelectCountryModal = dynamic(
  () => import("../components/Home/SelectYourCountry"),
  {
    ssr: false,
  }
);

const ModalComing = dynamic(() => import("../components/Home/ModalComing"), {
  ssr: false,
});
const Home = () => {
  const [headerActive, setHeaderActive] = useState(true);
  const [modal, setModal] = useState(false);
  const [modalCountry, setmodalCountry] = useState(false);
  const [modalComing, setModalComing] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  const router = useRouter();
  const countryName = router.query.pais;
  const validacionCountry =
    countryName === "bo"
      ? "Bolivia"
      : countryName === "mx"
      ? "México"
      : countryName === "co"
      ? "Colombia"
      : "";
  useEffect(() => {
    if (modal || modalComing) {
      document.documentElement.style.overflow = "hidden";
      document.body.scroll = "no"; // IE
    } else {
      document.body.scroll = "yes"; // IE
      document.documentElement.style.overflow = "auto";
    }
  }, [modal, modalComing]);
  // proximamente abriremos registro en tu pais

  return (
    <>
      <div>
        <Head>
          <title>AURA Financial | Home {validacionCountry} </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="La app que te acompaña a lo largo de tu vida financiera. Facilitamos el entendimiento de las finanzas, ayudamos a construir tu expediente y te ponemos en contacto con las financieras que cubran tus necesidades especificas. A fin de que tu negocio y tu vida crezcan."
          />
          <meta property="og:title" content="Aura Financial"></meta>
          <meta
            property="og:description"
            content="La app que te acompaña a lo largo de tu vida financiera. Facilitamos el entendimiento de las finanzas, ayudamos a construir tu expediente y te ponemos en contacto con las financieras que cubran tus necesidades especificas. A fin de que tu negocio y tu vida crezcan."
          ></meta>
          <meta property="og:image" content="/home.png" />
        </Head>

        <div
          style={{
            display: modal ? "block" : "none",
            position: "absolute",
            zIndex: 990,
          }}
        >
          <Dopper modalHandle={handleModal} />
        </div>
        <div className="app">
          {modalCountry && (
            <SelectCountryModal modalCountry={setmodalCountry} />
          )}
          {!modalCountry && <Header countryName={countryName} />}
          {modalComing && <ModalComing closemodal={setModalComing} />}
          <Banner countryName={countryName} modalCountry={validacionCountry !== 'Bolivia' ? setModalComing : setmodalCountry } />
          <Mision />
          <ComoFunciona
            countryName={countryName}
            modalCountry={validacionCountry !== 'Bolivia' ? setModalComing : setmodalCountry }
          />
          <Estrategias />
          <Personalidades />
          <AhorroInversion
            countryName={countryName}
            modalCountry={validacionCountry !== 'Bolivia' ? setModalComing : setmodalCountry }
          />
          <Credito countryName={countryName} modalCountry={validacionCountry !== 'Bolivia' ? setModalComing : setmodalCountry } />
          <Intereses />
          <Servicios countryName={countryName} modalCountry={validacionCountry !== 'Bolivia' ? setModalComing : setmodalCountry } />
          <Footer handleModal={handleModal} />
        </div>
      </div>
    </>
  );
};

export default Home;
