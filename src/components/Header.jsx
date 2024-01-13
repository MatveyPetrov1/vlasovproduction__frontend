import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import arrowDown from "../assets/img/arrowdown.svg";
import { setCity } from "../redux/slices/applicationSlice";
import {
  setCurrentPage,
  setApplicationIsOpen,
} from "../redux/slices/headerSlice";
import Application from "./Application";

const Header = () => {
  const [isOpenCity, setIsOpenCity] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [isOpenPortpholio, setIsOpenPortpholio] = useState(false);
  const [currentCity, setCurrentCity] = useState(10);
  const [applicationIsOpen, setApplicationIsOpen] = useState(false);
  const { city } = useSelector((state) => state.application);
  const { feedbackOffset } = useSelector((state) => state.offset);

  const applicationRef = useRef();

  const cityRef = useRef();
  const serviceRef = useRef();
  const portpholioRef = useRef();
  const dispatch = useDispatch();

  const { currentPage } = useSelector((state) => state.header);

  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cityRef.current && !event.composedPath().includes(cityRef.current)) {
        setIsOpenCity(false);
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

        // console.log(portpholioRef.current);
      }
      if (
        applicationRef.current &&
        !event.composedPath().includes(applicationRef.current)
      ) {
        setApplicationIsOpen(false);
        console.log(applicationRef.current);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const onClickCity = (city, index) => {
    dispatch(setCity(city));
    setCurrentCity(index);
  };

  const onClickMain = () => {
    onScrollToTop();
    dispatch(setCurrentPage(0));
  };

  const onClickPortpholio = () => {
    setIsOpenPortpholio(!isOpenPortpholio);
  };

  const onClickService = () => {
    setIsOpenServices(!isOpenServices);
  };

  const onClickFeedback = () => {
    window.scrollTo({
      top: feedbackOffset - 130,
      behavior: "smooth",
    });
  };

  const onClickContacts = () => {
    setApplicationIsOpen(!applicationIsOpen);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          {applicationIsOpen && (
            <div className="application__window">
              <div ref={applicationRef}>
                <Application />
              </div>
            </div>
          )}
          <div className="header__left">
            <ul>
              <li>
                <div
                  onClick={() => setIsOpenCity(!isOpenCity)}
                  className="header__city"
                  ref={cityRef}
                >
                  <p className="header__city__choose">{city}</p>
                  <div className="header__city__arrow">
                    <img src={arrowDown} alt="" />
                  </div>
                  {isOpenCity && (
                    <div className="header__popup">
                      <ul>
                        <li
                          onClick={() => {
                            onClickCity("Санкт-Петербург", 0);
                          }}
                          className={
                            currentCity === 0
                              ? "header__popup__item header__popup__active"
                              : "header__popup__item"
                          }
                        >
                          Санкт-Петербург
                        </li>
                        <li
                          onClick={() => {
                            onClickCity("Москва", 1);
                          }}
                          className={
                            currentCity === 1
                              ? "header__popup__item header__popup__active"
                              : "header__popup__item"
                          }
                        >
                          Москва
                        </li>
                        <li
                          onClick={() => {
                            onClickCity("Ростов-на-Дону", 2);
                          }}
                          className={
                            currentCity === 2
                              ? "header__popup__item header__popup__active"
                              : "header__popup__item"
                          }
                        >
                          Ростов-на-Дону
                        </li>
                        <li
                          onClick={() => {
                            onClickCity("Калач-на-Дону", 3);
                          }}
                          className={
                            currentCity === 3
                              ? "header__popup__item header__popup__active"
                              : "header__popup__item"
                          }
                        >
                          Калач-на-Дону
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <Link
                  onClick={onClickMain}
                  className={
                    currentPage === 0
                      ? "header__nav header__nav__active"
                      : "header__nav"
                  }
                  to="/"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  onClick={onClickPortpholio}
                  className={
                    currentPage === 1
                      ? "header__nav header__nav__active header__services"
                      : "header__nav header__portpholio"
                  }
                  ref={portpholioRef}
                >
                  Портфолио
                  {isOpenPortpholio && (
                    <div className="header__portpholio__popup">
                      <ul>
                        <li className="header__portpholio__popup__item">
                          <Link
                            to="/portpholio/school"
                            onClick={() => dispatch(setCurrentPage(1))}
                          >
                            Школьная фотосъемка
                          </Link>
                        </li>
                        <li className="header__portpholio__popup__item">
                          <Link
                            to="/portpholio/promotion"
                            onClick={() => dispatch(setCurrentPage(1))}
                          >
                            Рекламная фотосъемка
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  onClick={onClickService}
                  className={
                    currentPage === 2
                      ? "header__nav header__nav__active"
                      : "header__nav"
                  }
                  ref={serviceRef}
                >
                  Услуги
                  {isOpenServices && (
                    <div className=" header__services__popup ">
                      <ul>
                        <li className="header__services__popup__item">
                          <Link
                            to="/school"
                            onClick={() => dispatch(setCurrentPage(2))}
                          >
                            Школьная фотосъемка
                          </Link>
                        </li>
                        <li className="header__services__popup__item">
                          <Link
                            to="/promotion"
                            onClick={() => dispatch(setCurrentPage(2))}
                          >
                            Рекламная фотосъемка
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </Link>
              </li>
              <li>
                <Link onClick={onClickContacts} className="header__nav">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div className="header__right">
            <ul>
              <li>
                <Link className="header__nav" to="/" onClick={onClickFeedback}>
                  Отзывы
                </Link>
              </li>
              <li>
                <Link className="button header__button" to="">
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
