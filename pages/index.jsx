import Navbar from '../components/Navbar/Navbar'
import React from 'react'
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>aasdasd</title>
        <meta name="description" content="soy home" />
        <meta property="og:description" content="home"></meta>
        <meta property="og:title" content="titulo"></meta>

      </Head>
        <h1>Hola platzi!</h1>
        <Navbar />
    </div>
  )
}

export default Home