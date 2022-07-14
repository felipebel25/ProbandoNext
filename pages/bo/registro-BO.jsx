import React from "react";
import Head from "next/head";
import RotateScreen from "../../components/RotateScreen";
import { usePageAnalyitics } from "../../helpers/hooks/usePageAnalytics";
// import { usePageAnalyitics } from '../helpers/hooks/usePageAnalytics'
const RegisterQR = () => {
  //   usePageAnalyitics()
  usePageAnalyitics()
  return (
    <>
      <Head>
        <title>Register | AURA Finance</title>
      </Head>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        <iframe
          title="goRegister"
          id="typeform-full"
          width="100%"
          height="100%"
          frameBorder="0"
          src="https://go.moyoai.com/Au22BKe5"
          allow="geolocation; camera"
        />
      <RotateScreen />
    </>
  );
};

export default RegisterQR;
/* banderas como en desktop tablet*/ 
/* animaciones colores */
/* titulo en lila mobile */
/* amarillo tambien en mobile */
/* router */