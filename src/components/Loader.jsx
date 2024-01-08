import React from "react";
import logo from "../assets/img/logo.svg";

const Loader = () => {
  return (
    <div className="loader wow">
      <img
        src={logo}
        alt=""
        className="wow animate__animated animate__fadeInDown "
      />
    </div>
  );
};

export default Loader;
