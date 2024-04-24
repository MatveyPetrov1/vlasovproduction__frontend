import React from "react";
import styles from "../header.module.scss";

export const Services = ({
  setIsOpenServices,
  isOpenServices,
  serviceRef,
  setCurrentPage,
  currentPage,
}) => {
  return (
    <a
      onClick={() => setIsOpenServices(!isOpenServices)}
      className={
        currentPage === 2
          ? `${styles.header__nav} ${styles.header__nav__active}`
          : `${styles.header__nav}`
      }
      ref={serviceRef}
    >
      Услуги
      <div
        className={
          isOpenServices
            ? `${styles.header__popup} ${styles.header__popup__active} ${styles.header__popup__services}`
            : `${styles.header__popup} ${styles.header__popup__services}`
        }
      >
        <ul>
          <li className={styles.header__popup__item}>
            <a href="/school" onClick={() => dispatch(setCurrentPage(2))}>
              Школьная фотосъемка
            </a>
          </li>
          <li className={styles.header__popup__item}>
            <a href="/promotion" onClick={() => dispatch(setCurrentPage(2))}>
              Рекламная фотосъемка
            </a>
          </li>
        </ul>
      </div>
    </a>
  );
};
