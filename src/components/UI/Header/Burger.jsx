import React from "react";
import styles from "./header.module.scss";

const Burger = ({ isOpenBurger, setIsOpenBurger }) => {
  return (
    <div
      className={
        isOpenBurger
          ? `${styles.header__burger} ${styles.header__burger__active}`
          : `${styles.header__burger}`
      }
      onClick={() => setIsOpenBurger(!isOpenBurger)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="16"
        viewBox="0 0 24 21"
        fill="none"
      >
        <path
          d="M1 1.1377H23"
          stroke="white"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1 10.3047H23"
          stroke="white"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1 19.4707H23"
          stroke="white"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Burger;
