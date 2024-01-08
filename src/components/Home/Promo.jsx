import React from "react";
import logo from "../../assets/img/logo.svg";

const Promo = ({ bgImage }) => {
  return (
    <div
      className="promo"
      style={{
        backgroundImage: `url("${bgImage}")`,
      }}
    >
      <img src={logo} alt="" />
    </div>
  );
};

export default Promo;
