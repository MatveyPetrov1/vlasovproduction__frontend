import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import arrowDown from "../../../assets/img/header__arrow_down.svg";
import styles from "./header.module.scss";

const BurgerPopup = ({
  isOpenBurger,
  onClickCity,
  setApplicationIsOpen,
  onClickFeedback,
  setIsOpenBurger,
}) => {
  const [isOpenBurgerPortpholio, setIsOpenBurgerPortpholio] = useState(false);
  const [isOpenBurgerCity, setIsOpenBurgerCity] = useState(false);
  const [isOpenBurgerServices, setIsOpenBurgerServices] = useState(false);

  const { city } = useSelector((state) => state.application);
  const { cities } = useSelector((state) => state.header);

  const dispatch = useDispatch();

  const burgerPortpholioRef = useRef();
  const burgerPortpholioWindowRef = useRef();
  const burgerCityRef = useRef();
  const burgerCityWindowRef = useRef();
  const burgerServicesRef = useRef();
  const burgerServicesWindowRef = useRef();

  const onClickCityBurger = (city, index) => {
    setIsOpenBurgerCity(false);
    onClickCity(city, index);
  };

  const onClickApplication = () => {
    dispatch(setApplicationIsOpen(true));
    setIsOpenBurger(false);
  };

  return (
    <div
      className={
        isOpenBurger
          ? `${styles.header__popup} ${styles.header__popup__active} ${styles.header__popup__burger}`
          : `${styles.header__popup} ${styles.header__popup__burger}`
      }
    >
      <ul>
        <li
          className={`${styles.header__popup__burger__open} ${styles.header__popup__burger__item}`}
          ref={burgerCityRef}
          onClick={() => setIsOpenBurgerCity(!isOpenBurgerCity)}
        >
          <Link>{city}</Link>
          <img src={arrowDown} alt="" />
        </li>

        {/* City popup */}

        {isOpenBurgerCity && (
          <ul
            className={styles.header__popup__burger__open__items}
            ref={burgerCityWindowRef}
          >
            {cities.map((city, index) => {
              return (
                <li key={index}>
                  <Link onClick={() => onClickCityBurger(city, index)}>
                    {city}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}

        <li className={styles.header__popup__burger__item}>
          <a href="/">Главная</a>
        </li>
        <li
          ref={burgerPortpholioRef}
          className={styles.header__popup__burger__item}
          onClick={() => setIsOpenBurgerPortpholio(!isOpenBurgerPortpholio)}
        >
          <Link>Портфолио</Link>
        </li>

        {/* Portpholio popup */}

        {isOpenBurgerPortpholio && (
          <ul
            ref={burgerPortpholioWindowRef}
            className={styles.header__popup__burger__open__items}
          >
            <li>
              <a href="/portpholio/school">Школьная фотосъемка</a>
            </li>
            <li>
              <a href="/portpholio/promotion">Рекламная фотосъемка</a>
            </li>
          </ul>
        )}
        <li
          className={styles.header__popup__burger__item}
          ref={burgerServicesRef}
          onClick={() => setIsOpenBurgerServices(!isOpenBurgerServices)}
        >
          <Link>Услуги</Link>
        </li>

        {/* Services popup */}

        {isOpenBurgerServices && (
          <ul
            className={styles.header__popup__burger__open__items}
            ref={burgerServicesWindowRef}
          >
            <li>
              <a href="/school">Школьная фотосъемка</a>
            </li>
            <li>
              <a href="/promotion">Рекламная фотосъемка</a>
            </li>
          </ul>
        )}
        <li className={styles.header__popup__burger__item}>
          <Link onClick={() => onClickApplication(true)}>Контакты</Link>
        </li>
        <li className={styles.header__popup__burger__item}>
          <Link onClick={onClickFeedback} to="/">
            Отзывы
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BurgerPopup;
