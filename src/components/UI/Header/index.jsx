import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentPage,
  fetchHeaderItems,
  setCurrentCity,
} from "../../../redux/slices/components/headerSlice";
import {
  setApplicationIsOpen,
  setCity,
} from "../../../redux/slices/components/applicationSlice";
import BurgerPopup from "./BurgerPopup";
import Burger from "./Burger";
import styles from "./header.module.scss";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { Cities } from "./NavBar/Cities";
import { Portpholio } from "./NavBar/Portpholio";
import { Services } from "./NavBar/Services";
import { ApplicationWindow } from "./ApplicationWindow";

const Header = () => {
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
  }, []);

  const {
    isOpenServices,
    isOpenPortpholio,
    isOpenBurger,
    isOpenCities,
    setIsOpenServices,
    setIsOpenPortpholio,
    setIsOpenBurger,
    setIsOpenCities,
  } = useClickOutside(
    cityRef,
    serviceRef,
    portpholioRef,
    burgerRef,
    burgerPopupRef
  );

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

  const cityProps = {
    city,
    cityRef,
    onClickCityTitle,
    cities,
    currentCity,
    isOpenCities,
    onClickCity,
  };

  const portpholioProps = {
    isOpenPortpholio,
    currentPage,
    portpholioRef,
    setCurrentPage,
    setIsOpenPortpholio,
  };

  const servicesProps = {
    isOpenServices,
    setIsOpenServices,
    serviceRef,
    setCurrentPage,
    currentPage,
  };

  return (
    <header className={styles.header} ref={headerRef}>
      {/* Window application */}
      <ApplicationWindow
        setApplicationIsOpen={setApplicationIsOpen}
        isOpen={isOpen}
      />

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
                <Cities {...cityProps} />
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
                <Portpholio {...portpholioProps} />
              </li>
              <li>
                <Services {...servicesProps} />
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
