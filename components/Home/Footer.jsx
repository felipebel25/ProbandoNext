import React, { useEffect, useState } from 'react';
import {  useLocation } from 'react-router-dom';
import { HashLink  } from 'react-router-hash-link';


import logoAuraBlanco from '../assets/images/Aura_logo_white.png';
import facebookLogo from '../assets/images/facebook.svg';
import instaLogo from '../assets/images/social media.svg';

import { eventAnalytics } from '../helpers/hooks/usePageAnalytics';
import { getYear } from '../helpers/getYear';


const Footer = ({ handleModal, countryName }) => {
  const location = useLocation()
  const [year, setYear] = useState('');
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    })
  }
  const socialAnalytics = (socialMedia) => {
    eventAnalytics({
      name:socialMedia,
      action: `${socialMedia} button`,
      category: "redes sociales"
    })
  }
  useEffect(() => {
    setYear(getYear())
  }, [])
  const validateRoute = location.pathname.includes('/co') ? "/co"
    : location.pathname.includes('/bo') ? '/bo' : '/mx'

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
                        handleModal(true)
                        socialAnalytics('Boletin')
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
                    <HashLink to={`${validateRoute}#top`}>INICIO</HashLink>
                  </li>
                  <li className="scroll-to-section">
                    <HashLink
                      scroll={el => scrollWithOffset(el, 86)}
                      to={`${validateRoute}#mision`}>FILOSOFIA</HashLink>
                  </li>
                  <li>
                    <HashLink
                      scroll={el => scrollWithOffset(el, 80)}
                      to={`${validateRoute}#comolohacemos`}>COMO FUNCIONA</HashLink>

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
                    <button><img src={facebookLogo} /></button>
                  </a>
                  <a
                    onClick={() => { socialAnalytics('Instagram') }}
                    href="https://www.instagram.com/aura.financial/" target='_blank'
                  >
                    <button><img src={instaLogo} /></button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4 id='foooter--nosotros'>Nosotros</h4>
                <div className="logo">
                  <img src={logoAuraBlanco} />
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