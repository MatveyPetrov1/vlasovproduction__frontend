import React from "react";
import { Link } from "react-router-dom";
import styles from "./application.module.scss";
import header__styles from "../Header/header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCity } from "../../../redux/slices/components/headerSlice";
import {
  setCity,
  setIsOpenCities,
} from "../../../redux/slices/components/applicationSlice";
import arrowDown from "../../../assets/img/header__arrow_down.svg";

const Application = ({
  onChangeInputValueName,
  onChangeInputValuePhone,
  onChangeInputValueText,
  name,
  text,
  phone,
  nameError,
  phoneError,
  textError,
  isSend,
  sendApplication,
  setIsSend,
}) => {
  const dispatch = useDispatch();
  const { currentCity, cities } = useSelector((state) => state.header);
  const { city, isOpenCities } = useSelector((state) => state.application);

  const onClickCityTitle = () => {
    dispatch(setIsOpenCities(!isOpenCities));
  };

  const onClickCity = (city, index) => {
    dispatch(setCity(city));
    dispatch(setCurrentCity(index));
  };

  const cityRef = React.useRef(null);

  // React.useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (cityRef.current && !event.composedPath().includes(cityRef.current)) {
  //       dispatch(setIsOpenCities(false));
  //     }
  //   };

  //   window.addEventListener("click", handleClickOutside);

  //   return () => {
  //     window.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  return (
    <div className={styles.application__left}>
      <h1 className={styles.application__left__title}>Оставить заявку</h1>
      <div
        onClick={onClickCityTitle}
        className={`${header__styles.header__left__city} ${styles.application__cities}`}
        ref={cityRef}
      >
        <p>{city}</p>
        <div className={header__styles.header__left__city__arrow}>
          <img src={arrowDown} alt="" />
        </div>

        <div
          style={{ left: "0px" }}
          className={
            isOpenCities
              ? `${header__styles.header__popup} ${header__styles.header__popup__active} ${header__styles.application__popup}`
              : `${header__styles.header__popup} application__popup`
          }
        >
          <ul>
            {cities.length > 0 &&
              cities.map((city, index) => {
                return (
                  <li
                    className={header__styles.header__popup__item}
                    style={
                      currentCity === 1 || currentCity === 5
                        ? { width: "120%" }
                        : { width: "125%" }
                    }
                    onClick={() => onClickCity(city, index)}
                    key={index}
                  >
                    <a
                      className={
                        currentCity === index
                          ? `${header__styles.popup__active}`
                          : ""
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
      <div className={styles.application__input}>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => {
            onChangeInputValueName(e);
          }}
        ></input>
        {nameError ? (
          <p className={styles.application__input__error}>
            Неверный формат имени
          </p>
        ) : (
          ""
        )}
      </div>
      <div className={styles.application__input}>
        <input
          type="text"
          placeholder="Номер телефона"
          value={phone}
          onChange={(e) => {
            onChangeInputValuePhone(e);
          }}
        />
        {phoneError ? (
          <p
            className={`${styles.application__input__error} ${styles.application__input__error__phone}`}
          >
            Неверный формат телефона
          </p>
        ) : (
          ""
        )}
      </div>
      <div className={styles.application__input}>
        <input
          type="text"
          placeholder="Какая услуга интересует"
          value={text}
          onChange={(e) => {
            onChangeInputValueText(e);
          }}
        />
        {textError ? (
          <p
            className={`${styles.application__input__error} ${styles.application__input__error__text}`}
          >
            Неверный формат обращения
          </p>
        ) : (
          ""
        )}
      </div>

      {/* Application success  */}

      {isSend ? (
        <div className={styles.application__left__success}>
          <div className={styles.application__left__success__top}>
            <p className={styles.application__left__success__text}>
              Успешно! Ваша заявка отправлена и будет рассмотрена в самое
              ближайшее время!
            </p>
          </div>
          <div className={styles.application__left__success_button__block}>
            <Link
              onClick={() => setIsSend(false)}
              className={`${styles.application__left__success_button} ${styles.application__left__send_button}`}
            >
              Отправить еще
            </Link>
          </div>
        </div>
      ) : (
        <Link
          className={styles.application__left__send_button}
          onClick={sendApplication}
        >
          Отправить
        </Link>
      )}
    </div>
  );
};

export default Application;
