import Head from 'next/head'
import React from 'react'
import EmailsLanding from '../../components/EmailsLanding'
// import { usePageAnalyitics } from '../helpers/hooks/usePageAnalytics';

const ThankYouRegister = () => {

//   usePageAnalyitics()
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Thank You-Register | AURA Financial</title>
      </Head>
      <EmailsLanding
        title='¡Gracias por registrarte!'
        text={`Estamos trabajando para buscar las mejores opciones. Muy pronto te contactaremos en contacto.`}
        socialMedias={true}
      />
    </>

  )
}

export default ThankYouRegister
