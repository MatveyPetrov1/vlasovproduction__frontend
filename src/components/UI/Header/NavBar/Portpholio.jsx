import React from "react";
import styles from "../header.module.scss";

export const Portpholio = ({
  isOpenPortpholio,
  currentPage,
  portpholioRef,
  setCurrentPage,
  setIsOpenPortpholio,
}) => {
  return (
    <a
      onClick={() => setIsOpenPortpholio(!isOpenPortpholio)}
      className={
        currentPage === 1
          ? `${styles.header__nav} ${styles.header__nav__active} ${styles.header__services}`
          : `${styles.header__nav} ${styles.header__portpholio}`
      }
      ref={portpholioRef}
    >
      Портфолио
      <div
        className={
          isOpenPortpholio
            ? `${styles.header__popup} ${styles.header__popup__active} ${styles.header__popup__portpholio}`
            : `${styles.header__popup} ${styles.header__popup__portpholio}`
        }
      >
        <ul>
          <li className={styles.header__popup__item}>
            <a
              href="/portpholio/school"
              onClick={() => dispatch(setCurrentPage(1))}
            >
              Школьная фотосъемка
            </a>
          </li>
          <li className={styles.header__popup__item}>
            <a
              href="/portpholio/promotion"
              onClick={() => dispatch(setCurrentPage(1))}
            >
              Рекламная фотосъемка
            </a>
          </li>
        </ul>
      </div>
    </a>
  );
};
