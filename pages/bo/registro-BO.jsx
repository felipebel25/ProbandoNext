import React from "react";
import Head from "next/head";
import RotateScreen from "../../components/RotateScreen";
// import { usePageAnalyitics } from '../helpers/hooks/usePageAnalytics'
const RegisterQR = () => {
  //   usePageAnalyitics()
  return (
    <>
      <Head>
        <title>Register | AURA Finance</title>
      </Head>
      <p>loading</p>

      <div className="holds-the-iframe">
        <iframe
          title="goRegister"
          id="typeform-full"
          width="100%"
          height="100%"
          frameBorder="0"
          src="https://go.moyoai.com/Au22BKe5"
          allow="geolocation; camera"
        />
      </div>
      <RotateScreen />
    </>
  );
};

export default RegisterQR;
