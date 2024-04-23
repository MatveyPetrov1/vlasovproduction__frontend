import React from "react";
import logo from "../../../assets/img/blacklogo.png";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src={logo} alt="" />
    </div>
  );
};

export default Loader;
