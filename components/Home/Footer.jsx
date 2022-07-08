import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";



// import { eventAnalytics } from '../helpers/hooks/usePageAnalytics';
import { getYear } from '../../helpers/getYear';
import Link from 'next/link';

const Footer = ({ handleModal, countryName }) => {
  const router = useRouter()
  const country =
    router.query.pais === "co"
      ? "/co"
      : router.query.pais === "bo"
      ? "/bo"
      : "/mx";



  const [year, setYear] = useState('');

  const socialAnalytics = (socialMedia) => {
    // eventAnalytics({
    //   name:socialMedia,
    //   action: `${socialMedia} button`,
    //   category: "redes sociales"
    // })
    console.log('hola');
  }
  useEffect(() => {
    setYear(getYear())
  }, [])

  return (
    <>
      <footer id="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h3 className="footer-title">
                  Únete a nuestro boletín para recibir las últimas noticias y tips de salud financiera.</h3>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-3">
              <form id="search" action="#" method="GET">
                <div className="row container__suscribe">

                  <div className="col-lg-6 col-sm-6">
                    <fieldset>
                      <button type="button" className="main-button suscribe__button" onClick={() => {
                        handleModal(s => !s)
                        // socialAnalytics('Boletin')
                      }}>Suscríbase <i className="fa fa-angle-right" /></button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>Contacto</h4>
                <p>Tenayuca 140 <br />
                  Col. Letran Valle, 03650<br />
                  Ciudad de México, México</p>
                <p><a href="#"> +52 (55) 1205.1000</a></p>
                <p><a href="#"> aura@moyoAi.com</a></p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>Mapa</h4>
                <ul>
                  <li>
                    <Link href={`${country}/#top`} scroll={false}>INICIO</Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link href={`${country}/#mision`}>FILOSOFIA</Link>
                  </li>
                  <li>
                    <Link href={`${country}/#comolohacemos`}>COMO FUNCIONA</Link>

                  </li>

                </ul>

              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>Links</h4>
                <div className="footer-widget--social">
                  <a
                    onClick={() => { socialAnalytics('Facebook') }}
                    href="https://www.facebook.com/aura.Bolivia01" target='_blank'
                  >
                    <button><img src='/facebook.svg' /></button>
                  </a>
                  <a
                    onClick={() => { socialAnalytics('Instagram') }}
                    href="https://www.instagram.com/aura.financial/" target='_blank'
                  >
                    <button><img src='/social media.svg' /></button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4 id='foooter--nosotros'>Nosotros</h4>
                <div className="logo">
                  <img src='/Aura_logo_white.png' />
                </div>
                <p>Hacemos que las finanzas sean accesibles para todos. Estructurar tus finanzas personales puede impulsar
                  tu vida. Menos estrés y ansiedad, más libertad y sueños. Te apoyamos durante este viaje con algoritmos
                  inteligentes y asesoramiento personal.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="copyright-text">
                <p>Copyright © {year} Aura Financial. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>

  )
}

export default Footer