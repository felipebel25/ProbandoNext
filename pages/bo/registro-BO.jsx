import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";

// import Iframe from "../../components/Iframe";
import RotateScreen from "../../components/RotateScreen";
import { getCookies ,setCookie } from 'cookies-next';
const Iframe = dynamic(() => import("../../components/Iframe"), {
  ssr: false,
});
const RegisterQR = () => {
  // usePageAnalyitics();
  // const domain = () => {
  //   if (typeof document !== "undefined" && document.domain === "aura.moyoai.com") {
  //     return  process.env.REACT_APP_URL_REGISTER_PROD
  //   }else{
  //     return process.env.REACT_APP_URL_REGISTER_DEV
  //   }
  // };
  // const route = domain()
  useEffect(() => {
    setCookie('session', 'uLr5lpIykh76gRYB');
    console.log( getCookies());
    
  }, []);
   
  return (
    <>
      <Head>
        <title>Register | AURA Finance</title>
      </Head>
      <h1>cambio</h1>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* <Embed url='https://dev-go.moyoai.com/Au22BKe5' /> */}
      <Iframe />
      <RotateScreen />
    </>
  );
};

export default RegisterQR;
