import React from "react";
import Head from "next/head";

import Banner from "../components/Home/Banner";



const Home = () => {
  return (
    <>
      <div>
        <Head>
          <title>AURA Financial | Home Bolivia</title>
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
          <Banner />
        </div>
      </div>
    </>
  );
};

export default Home;
