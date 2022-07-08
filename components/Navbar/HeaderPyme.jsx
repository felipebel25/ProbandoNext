import React, { useEffect, useState } from "react";
import styles from "../../styles/components/landing/headerpyme.module.css";

const HeaderMyPyme = () => {
  const [y, setY] = useState(0);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    setY(window.scrollY);
  };

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
        y < 70
          ? `${styles.headermypyme} header-sticky wow slideInDown`
          : `${styles.headermypyme} ${styles.headermypyme__active} header-sticky wow slideInDown animated background-header`
      }
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className={styles.headermypyme__logo}>
        <a href="/">
          <img
            src="/logo_horizontal_solo.png"
            alt=""
            className="headermypyme__logo--image"
          />
        </a>
      </div>
    </header>
  );
};

export default HeaderMyPyme;
