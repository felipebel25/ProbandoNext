import React, { useState } from "react";

const Iframe = () => {
  return typeof window !== "undefined" && typeof document !==  'undefined' ? (
    <iframe
      title="goRegister"
      id="typeform-full"
      width="100%"
      height="100%"
      src='https://dev-go.moyoai.com/Au22BKe5'
      allow="geolocation; camera"
    />
  ) : (
    "nada"
  );
};

export default Iframe;
