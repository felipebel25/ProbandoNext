import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import getCountry from "../apis/apiCountry";
const AuthCountry = () => {
  let navigate = useRouter();
  useEffect(() => {
    getCountry().then((country) => {
      if (country === "Bolivia") {
        navigate.push("/bo");
      } else if (country === "Colombia") {
        navigate.push("/co");
      } else {
        navigate.push("/mx");
      }
    });
  }, []);
  return (
    <Head>
      <meta charset="utf-8" />
      <link rel="icon" href='/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="La app que te acompaña a lo largo de tu vida financiera. Te facilitamos el entendimiento de las finanzas, ayudamos a armar tu expediente y te contactamos con las financieras que cubran tus necesidades especificas. A fin de que tu negocio y tu vida crezcan."
      />
      <meta property="og:title" content="Aura Financial"></meta>
      <meta
        property="og:description"
        content="La app que te acompaña a lo largo de tu vida financiera. Te facilitamos el entendimiento de la finanzas, ayudamos a armar tu expediente y te contactamos con las financieras que cubran tus necesidades especificas. A fin de que tu negocio y tu vida crezcan."
      ></meta>
      <meta name="keywords" content="asesoria, educacion, salud, financiera, expediente, ahorro, inversion, credito, score, crediticio, credit, scoring, psicometrico, inclusion, financiera, Fintech, Mexico, Colombia, Bolivia, Latam, micro, pequeña, mediana, empresa, pyme, mipyme, banco, emprendedor, solucion, crowdfunding, proyecto, innovacion, disruptivo, IA, machine, learning" />
      <meta property="og:image" content="/home.png" />
    </Head>
  );
};

export default AuthCountry;