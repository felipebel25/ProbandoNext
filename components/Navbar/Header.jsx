import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const Header = ({ countryName }) => {
  const router = useRouter();
  const [y, setY] = useState(0);
  const [activeDown, setActiveDown] = useState(false);
  const handleToogleHamburguer = () => {
    setActiveDown(!activeDown);
    const nav = document.querySelector(".nav");
    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  };

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    setY(window.scrollY);
  };

  const validateRoute =
    router.query.pais === "co"
      ? "/co"
      : router.query.pais === "bo"
      ? "/bo"
      : "/mx";

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
              <a href={"/#top"} >
                <img src="/Aura_logo.png" alt="" className="imagelogo logo" />
              </a>

              <ul className="nav">
                <li className="scroll-to-section">
                  <a href={`${validateRoute}/#top`} scroll={false}>
                    INICIO
                  </a>
                </li>

                <li className="scroll-to-section">
                  <Link href={`${validateRoute}/#mision`}>FILOSOFIA</Link>
                </li>

                <li className="scroll-to-section">
                  <Link href={`${validateRoute}/#comolohacemos`}>
                    COMO FUNCIONA
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link href={`${validateRoute}/#newsletter`}>BOLETIN</Link>
                </li>

                <li
                  onClick={handleToogleHamburguer}
                  className="bandera__container"
                >
                  <div className="banderas">
                    {countryName && (
                      <img
                        onClick={() => {
                          setActiveDown(!activeDown);
                        }}
                        src={
                          countryName === "co"
                            ? "/Flag_of_Colombia.svg"
                            : countryName === "bo"
                            ? "/Bandera_de_Bolivia_(Estado) (1).svg"
                            : countryName === "mx"
                            ? "/Flag_of_Mexico.svg"
                            : ""
                        }
                        alt={"flag-bolivia"}
                        className="banderas__default"
                      />
                    )}
                    <>
                      {activeDown && (
                        <div
                          className="banderas__closeModal"
                          onClick={() => {
                            setActiveDown(false);
                          }}
                        />
                      )}
                      {activeDown && (
                        <div className="banderas__container">
                          {countryName !== "mx" && (
                            <a href="/mx">
                              <img
                                src="/Flag_of_Mexico.svg"
                                alt={"flag-mexico"}
                                className="banderas__mex"
                              />
                            </a>
                          )}
                          {countryName !== "bo" && (
                            <a href="/bo">
                              <img
                                src="/Bandera_de_Bolivia_(Estado) (1).svg"
                                alt={"flag-bolivia"}
                                className="banderas__bolivia"
                              />
                            </a>
                          )}
                          {countryName !== "co" && (
                            <a href="/co">
                              <img
                                src="/Flag_of_Colombia.svg"
                                alt={"flag-colombia"}
                                className="banderas__bolivia"
                              />
                            </a>
                          )}
                        </div>
                      )}

                      <div className="banderas__mobile">
                        <div
                          className="banderas__closeModal"
                          onClick={() => {
                            setActiveDown(false);
                          }}
                        ></div>
                        <div className="banderas">
                          <a href="/mx">
                            <img
                              src="/Flag_of_Mexico.svg"
                              alt={"flag-mexico"}
                              className="banderas__mex"
                            />
                          </a>
                          <a href="/bo">
                            <img
                              src="/Bandera_de_Bolivia_(Estado) (1).svg"
                              alt={"flag-bolivia"}
                              className="banderas__bolivia"
                            />
                          </a>
                          <a href="/co">
                            <img
                              src="/Flag_of_Colombia.svg"
                              alt={"flag-colombia"}
                              className="banderas__bolivia"
                            />
                          </a>
                        </div>
                      </div>
                    </>
                  </div>
                </li>
              </ul>
              <a
                className="menu-trigger"
                onClick={() => {
                  handleToogleHamburguer();
                }}
              >
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
