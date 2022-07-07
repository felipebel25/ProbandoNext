import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


const Header = ({countryName}) => {
  const router = useRouter();
  const [y, setY] = useState(0);
  const [activeDown, setActiveDown] = useState(false);
  const handleToogleHamburguer = () => {
    const nav = document.querySelector(".nav");
    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  };
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
    });
  };
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    setY(window.scrollY);
  };
  const validationFlag = () => {
    if (countryName === "bo") {
      return (
        <img
          onClick={() => {
            setActiveDown(!activeDown);
          }}
          src="/Bandera_de_Bolivia_(Estado) (1).svg"
          alt={"flag-bolivia"}
          className="banderas__bolivia"
        />
      );
    } else if (countryName === "mx") {
      return (
        <img
          src="/Flag_of_Mexico.svg"
          onClick={() => {
            setActiveDown(!activeDown);
          }}
          alt={"flag-mexico"}
          className="banderas__mex"
        />
      );
    } else if (countryName === "co") {
      return (
        <img
          src="/Flag_of_Colombia.svg"
          onClick={() => {
            setActiveDown(!activeDown);
          }}
          alt={"flag-colombia"}
          className="banderas__bolivia"
        />
      );
    }
  };
  const validateRoute = router.query.pais === ("co")
    ? "/co"
    : router.query.pais === ("bo")
    ? "/bo"
    : "/mx";

  const validateWidth =
    typeof window !== "undefined" && window.screen.width > 767 ? false : true;
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", (e) => handleNavigation(e));
    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);
  return (
    <header
      className={
        y < 120
          ? `header-area header-sticky wow slideInDown`
          : `header-area header-sticky wow slideInDown animated background-header`
      }
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row header-nav">
          <div className="col-12">
            <nav className="main-nav">
              <Link
                href={'/#top'}
              >
                <img src="/Aura_logo.png" alt="" className="imagelogo logo" />
              </Link>

              <ul className="nav">
                <li onClick={handleToogleHamburguer} className="scroll-to-section">
                  <Link href={`${validateRoute}/#top`} scroll={false}>INICIO</Link></li>


                <li onClick={handleToogleHamburguer} className="scroll-to-section">
                  <Link
                    href={`${validateRoute}/#mision`}>FILOSOFIA</Link>
                </li>


                <li onClick={handleToogleHamburguer} className="scroll-to-section">
                  <Link
             
                    href={`${validateRoute}/#comolohacemos`}
                    
                    
                    >COMO FUNCIONA</Link>
                </li>
                <li onClick={handleToogleHamburguer}
                  className="scroll-to-section">
                  <Link
                    href={`${validateRoute}/#newsletter`}>
                    BOLETIN
                  </Link>
                </li>
                <li onClick={handleToogleHamburguer} className="bandera__container">
                  <div className="banderas">
                    {/* {!validateWidth ?
                      <>
                        {validationFlag()}
                        {activeDown ?
                          <>
                            <div className='banderas__closeModal' onClick={() => { setActiveDown(false) }} />
                            <div className="banderas__container">
                              {countryName !== 'mx' &&
                                <a href='/mx' >
                                  <img src='/Flag_of_Mexico.svg' alt={'flag-mexico'} className="banderas__mex" />
                                </a>
                              }
                              {countryName !== 'bo' &&
                                <a href='/bo'>
                                  <img src='/Bandera_de_Bolivia_(Estado) (1).svg' alt={'flag-bolivia'} className="banderas__bolivia" />
                                </a>
                              }
                              {countryName !== 'co' &&
                                <a href='/co'>
                                  <img src='/Flag_of_Colombia.svg' alt={'flag-colombia'} className="banderas__bolivia" />
                                </a>
                              }

                            </div>
                          </>
                          : ""
                        }
                      </>

                      :
                      <>
                        <div className='banderas__closeModal' onClick={() => { setActiveDown(false) }} />
                        <div className="banderas">
                            <a href='/mx' >
                              <img src='/Flag_of_Mexico.svg' alt={'flag-mexico'} className="banderas__mex" />
                            </a>
                            <a href='/bo'>
                              <img src='/Bandera_de_Bolivia_(Estado) (1).svg' alt={'flag-bolivia'} className="banderas__bolivia" />
                            </a>
                            <a href='/co'>
                              <img src='/Flag_of_Colombia.svg' alt={'flag-colombia'} className="banderas__bolivia" />
                            </a>

                        </div>
                      </>
                    } */}


                  </ div>
                </li>
              </ul>
              {/* <a className="menu-trigger" onClick={() => { handleToogleHamburguer() }}>
                <span>Menu</span>
              </a> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
