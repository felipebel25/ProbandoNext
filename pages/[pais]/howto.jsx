import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// import { usePageAnalyitics } from '../helpers/hooks/usePageAnalytics';
import { useRouter } from "next/router";
import Information from "../../components/howto/Information";
import Header from "../../components/Navbar/Header";
const Dopper = dynamic(() => import("../../components/Doppler/Doppler"), {
  ssr: false,
});
const Appholistica = () => {
  const [country, setCountry] = useState("");
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  let router = useRouter();
  //   usePageAnalyitics();
  const validateRoute =
    router.query.pais === "co"
      ? "co"
      : router.query.pais === "bo"
      ? "bo"
      : "mx";

  useEffect(() => {
    setCountry(validateRoute);
  }, [validateRoute]);
  return (
    <>
     <div
          style={{
            display: modal ? "block" : "none",
            position: "absolute",
            zIndex: 990,
          }}
        >
          <Dopper modalHandle={handleModal} />
        </div>
      <Header countryName={validateRoute} />
      <Information modalHandle={handleModal} />
    </>
  );
};
export default Appholistica;
