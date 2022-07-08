import Head from "next/head";
import React from "react";
import styles from "../../styles/components/doppler/doppler.module.css";
// import ReactGA from "react-ga4";

const Dopper = ({ modalHandle }) => {
  return (
    <>
      <Head>
        <script src="https://cdn.fromdoppler.com/formgenerator/latest/vendor.js?23194400"></script>
        <link
          rel="stylesheet"
          href="https://cdn.fromdoppler.com/formgenerator/latest/styles.css?23194400"
        />
      </Head>
      <main className={styles.dopler}>
        <div
          className={styles.dopler__out}
          onClick={() => {
            modalHandle();
          }}
        />
        <div className={styles.dopler__container}>
          <div className={styles.dopler__button}>
            <button
              onClick={() => {
                modalHandle();
              }}
            >
              x
            </button>
          </div>

          <div data-dp-form="IXiZ4q%2bvqZDNa3u%2b42y5YA%3d%3d" />
        </div>
      </main>
    </>
  );
};

export default Dopper;
