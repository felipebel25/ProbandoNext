import React from "react";
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

const Home = () => {
  const router = useRouter()
  const countryName  = (router.query.pais);
  const validacionCountry = countryName === 'bo' ? 'Bolivia' : countryName === 'mx' ? 'México' : countryName === 'co' ? 'Colombia' : ""

  return (
    <>
      <div>
        <Head>
          <title>AURA Financial | {validacionCountry} </title>
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
        <div className="app">
          <Header countryName={countryName} />
          <Banner countryName={countryName} />
          <Mision />
          <ComoFunciona countryName={countryName}/>
          <Estrategias />
          <Personalidades />
          <AhorroInversion  countryName={countryName}/>
          <Credito countryName={countryName} />
          <Intereses />
          <Servicios countryName={countryName} />
        </div>
      </div>
    </>
  );
};

export default Home;
