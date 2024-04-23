import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import arrowDown from "../../../assets/img/header__arrow_down.svg";
import {
  setCurrentPage,
  fetchHeaderItems,
  setCurrentCity,
} from "../../../redux/slices/components/headerSlice";
import {
  setApplicationIsOpen,
  setCity,
} from "../../../redux/slices/components/applicationSlice";
import Application from "../Application";
import BurgerPopup from "./BurgerPopup";
import Burger from "./Burger";
import styles from "./header.module.scss";
import app_styles from "../Application/application.module.scss";

const Header = () => {
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [isOpenPortpholio, setIsOpenPortpholio] = useState(false);
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const [isOpenCities, setIsOpenCities] = useState(false);

  const { feedbackOffset } = useSelector((state) => state.feedbackTop);
  const { currentPage, cities, currentCity } = useSelector(
    (state) => state.header
  );
  const { city, isOpen } = useSelector((state) => state.application);

  const cityRef = useRef();
  const serviceRef = useRef();
  const portpholioRef = useRef();
  const burgerRef = useRef();
  const burgerPopupRef = useRef();
  const headerRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeaderItems());

    const handleClickOutside = (event) => {
      if (cityRef.current && !event.composedPath().includes(cityRef.current)) {
        setIsOpenCities(false);
      }

      if (
        serviceRef.current &&
        !event.composedPath().includes(serviceRef.current)
      ) {
        setIsOpenServices(false);
      }

      if (
        portpholioRef.current &&
        !event.composedPath().includes(portpholioRef.current)
      ) {
        setIsOpenPortpholio(false);
      }

      if (
        burgerRef.current &&
        !event.composedPath().includes(burgerRef.current) &&
        !event.composedPath().includes(burgerPopupRef.current)
      ) {
        setIsOpenBurger(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const onClickCityTitle = () => {
    setIsOpenCities(!isOpenCities);
  };

  const onClickCity = (city, index) => {
    dispatch(setCity(city));
    dispatch(setCurrentCity(index));
  };

  const onClickFeedback = () => {
    dispatch(setCurrentPage(0));
    window.scrollTo({
      top: feedbackOffset,
      behavior: "smooth",
    });
  };

  return (
    <header className={styles.header} ref={headerRef}>
      {/* Window application */}

      <div
        className={
          isOpen
            ? `${app_styles.application__window} ${app_styles.application__window__active}`
            : `${app_styles.application__window}`
        }
      >
        <div
          className={app_styles.application__fullscreen}
          onClick={() => {
            dispatch(setApplicationIsOpen(false));
          }}
        >
          <svg
            onClick={() => {
              dispatch(setApplicationIsOpen(false));
            }}
            className="school__carousel__close_icon"
            viewBox="0 0 24 24"
            width="50px"
            height="50px"
            fill="#fff"
          >
            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
          </svg>
        </div>

        <div className={app_styles.application__fullscreen__block}>
          <Application isWindow={true} />
        </div>
      </div>

      {/* Burger popup */}

      <div ref={burgerPopupRef}>
        <BurgerPopup
          isOpenBurger={isOpenBurger}
          onClickCity={onClickCity}
          setApplicationIsOpen={setApplicationIsOpen}
          onClickFeedback={onClickFeedback}
          setIsOpenBurger={setIsOpenBurger}
        />
      </div>

      {/* Header */}

      <div className="container">
        <div className={styles.header__wrapper}>
          {/* Burger */}

          <div ref={burgerRef} className={styles.header__burger}>
            <Burger
              isOpenBurger={isOpenBurger}
              setIsOpenBurger={setIsOpenBurger}
            />
          </div>

          {/* Header left */}

          <div className={styles.header__left}>
            <ul>
              <li>
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
                                  currentCity === index
                                    ? `${styles.popup__active}`
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
              </li>
              <li>
                <a
                  onClick={() => dispatch(setCurrentPage(0))}
                  className={
                    currentPage === 0
                      ? `${styles.header__nav} ${styles.header__nav__active}`
                      : `${styles.header__nav}`
                  }
                  href="/"
                >
                  Главная
                </a>
              </li>
              <li>
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
              </li>
              <li>
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
                        <a
                          href="/school"
                          onClick={() => dispatch(setCurrentPage(2))}
                        >
                          Школьная фотосъемка
                        </a>
                      </li>
                      <li className={styles.header__popup__item}>
                        <a
                          href="/promotion"
                          onClick={() => dispatch(setCurrentPage(2))}
                        >
                          Рекламная фотосъемка
                        </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
              <li>
                <a
                  onClick={() => dispatch(setApplicationIsOpen(true))}
                  className={styles.header__nav}
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Header right */}

          <div className={styles.header__right}>
            <ul>
              <li>
                <Link
                  className={styles.header__nav}
                  href="/"
                  onClick={onClickFeedback}
                >
                  Отзывы
                </Link>
              </li>
              <li>
                <Link
                  className={`button ${styles.header__button}`}
                  onClick={() => dispatch(setApplicationIsOpen(true))}
                >
                  Оставить заявку
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
