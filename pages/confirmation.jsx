import Head from "next/head";
import React from "react";
import EmailsLanding from "../components/EmailsLanding";
import { usePageAnalyitics } from "../helpers/hooks/usePageAnalytics";

const ConfirmationEmail = () => {
  usePageAnalyitics()
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <title>Confirmation | AURA Financial</title>
      </Head>
      <EmailsLanding
        title="¡Gracias por confirmar tu correo electrónico!"
        text="Muy pronto estarás recibiendo las últimas noticias y tips de salud financiera."
        socialMedias={true}
      />
    </>
  );
};

export default ConfirmationEmail;
