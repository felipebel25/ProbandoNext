import React from "react";
import Head from "next/head";
import EmailsLanding from "../components/EmailsLanding";
import { usePageAnalyitics } from "../helpers/hooks/usePageAnalytics";

const NotFound = () => {
  usePageAnalyitics();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title> 404 | AURA Financial</title>
      </Head>
      <EmailsLanding
        title="404"
        text="Upsss... no pudimos encontrar la pagina"
        notFound={true}
        timeReturnHome={10000}
      />
    </>
  );
};

export default NotFound;
