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
const Home = () => {
  const [headerActive, setHeaderActive] = useState(true);
  const [modal, setModal] = useState(false);

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
    if (modal) {
      document.documentElement.style.overflow = "hidden";
      document.body.scroll = "no"; // IE
    } else {
      document.body.scroll = "yes"; // IE
      document.documentElement.style.overflow = "auto";
    }
  }, [modal]);
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
            content="La app que te acompaña a lo largo de tu vida financiera. Te facilitamos el entendimiento de la finanzas, ayudamos a armar tu expediente y te contactamos con las financieras que cubran tus necesidades especificas. A fin de que tu negocio y tu vida crezcan."
          />
          <meta property="og:title" content="Aura Financial"></meta>
          <meta
            property="og:description"
            content="La app que te acompaña a lo largo de tu vida financiera. Te facilitamos el entendimiento de la finanzas, ayudamos a armar tu expediente y te contactamos con las financieras que cubran tus necesidades especificas. A fin de que tu negocio y tu vida crezcan."
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
          <Header countryName={countryName} />
          <Banner countryName={countryName} />
          <Mision />
          <ComoFunciona countryName={countryName} />
          <Estrategias />
          <Personalidades />
          <AhorroInversion countryName={countryName} />
          <Credito countryName={countryName} />
          <Intereses />
          <Servicios countryName={countryName} />
          <Footer handleModal={handleModal} />
        </div>
      </div>
    </>
  );
};

export default Home;
