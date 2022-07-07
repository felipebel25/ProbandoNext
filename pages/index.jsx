import { useRouter } from "next/router";
import { useEffect } from "react";

import getCountry from "../apis/apiCountry";
const AuthCountry = () => {
  let navigate = useRouter();
  useEffect(() => {
    getCountry().then((country) => {
      if (country === "Bolivia") {
        navigate.push("/bo");
      } else if (country === "Colombia") {
        navigate.push("/co");
      } else {
        navigate.push("/mx");
      }
    });
  }, []);
  
};

export default AuthCountry;
