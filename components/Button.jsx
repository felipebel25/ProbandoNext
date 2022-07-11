import React from "react";

const Button = ({ contenido = "Registrate", clases, route, click }) => {
  return (
    <div className={`button--component ${clases === "left" ? clases : ""}`}>
      <button onClick={click} className={`${clases ? clases : ""}`}>
        {contenido}
      </button>
    </div>
  );
};

export default Button;
