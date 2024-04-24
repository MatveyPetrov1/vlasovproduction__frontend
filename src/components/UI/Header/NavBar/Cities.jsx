import React from "react";
import arrowDown from "../../../../assets/img/header__arrow_down.svg";
import styles from "../header.module.scss";

export const Cities = ({
  city,
  cityRef,
  onClickCityTitle,
  cities,
  currentCity,
  isOpenCities,
  onClickCity,
}) => {
  return (
    <div
      onClick={onClickCityTitle}
      className={styles.header__left__city}
      ref={cityRef}
    >
      <p className={styles.header__left__city__name}>{city}</p>
      <div className={styles.header__left__city__arrow}>
        <img src={arrowDown} alt="" />
      </div>

      <div
        className={
          isOpenCities
            ? `${styles.header__popup} ${styles.header__popup__active}`
            : `${styles.header__popup}`
        }
      >
        <ul>
          {cities.length > 0 &&
            cities.map((city, index) => {
              return (
                <li
                  className={styles.header__popup__item}
                  style={
                    currentCity === 1 || currentCity === 5
                      ? { width: "170%" }
                      : { width: "125%" }
                  }
                  onClick={() => onClickCity(city, index)}
                  key={index}
                >
                  <a
                    className={
                      currentCity === index ? `${styles.popup__active}` : ""
                    }
                  >
                    {city}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
