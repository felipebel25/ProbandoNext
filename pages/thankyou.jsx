import Head from 'next/head';
import React from 'react'
import EmailsLanding from '../components/EmailsLanding';
// import { usePageAnalyitics } from '../helpers/hooks/usePageAnalytics';

const ThankYou = () => {
//   usePageAnalyitics()
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Thank You | AURA Financial</title>
      </Head>
      <EmailsLanding
        title='¡Gracias por suscribirte!'
        text='Confirma a través del enlace que enviamos a tu correo electrónico.
        Si no encuentras el correo, revisa tu carpeta de SPAM.'
        timeReturnHome={15000}
      />
    </>

  )
}

export default ThankYou


// links de header estan funcionando raro
