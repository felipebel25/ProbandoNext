import Navbar from "../components/Navbar/Navbar";
import React from "react";
import Head from "next/head";

const about = () => {
  return (
    <>
      <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="soy about" />
        <meta property="og:title" content="titulo"></meta>
        <meta property="og:description" content="about soy"></meta>


      </Head>
        <Navbar />
        <h1>esta es la pagina de About</h1>
      </div>
    </>
  );
};

export default about;
