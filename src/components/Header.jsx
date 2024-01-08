import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import arrowDown from "../assets/img/arrowdown.svg";
import { setCity } from "../redux/slices/applicationSlice";

const Header = ({ onScrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCity, setCurrentCity] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const { photographyOffset, applicationOffset, feedbackOffset } = useSelector(
    (state) => state.offset
  );
  const headerRef = useRef();
  const dispatch = useDispatch();

  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        headerRef.current &&
        !event.composedPath().includes(headerRef.current)
      ) {
        setIsOpen(false);
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
    setCurrentPage(0);
  };

  const onClickPortpholio = () => {
    setCurrentPage(1);
  };

  const onClickService = () => {
    setCurrentPage(2);
  };

  const onClickContacts = () => {
    setCurrentPage(3);
  };

  const onClickFeedback = () => {
    setCurrentPage(4);
  };
  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <ul>
              <li>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="header__city"
                >
                  <p className="header__city__choose">Выбрать город</p>
                  <div className="header__city__arrow">
                    <img src={arrowDown} alt="" />
                  </div>
                  {isOpen && (
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
                      ? "header__nav header__nav__active"
                      : "header__nav"
                  }
                  to="/portpholio"
                >
                  Портфолио
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
                  to="/"
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  onClick={onClickContacts}
                  className={
                    currentPage === 3
                      ? "header__nav header__nav__active"
                      : "header__nav"
                  }
                  to="/"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div className="header__right">
            <ul>
              <li>
                <Link
                  className={
                    currentPage === 4
                      ? "header__nav header__nav__active"
                      : "header__nav"
                  }
                  to="/"
                  onClick={onClickFeedback}
                >
                  Отзывы
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => onScrollTo(applicationOffset)}
                  className="button header__button"
                  to=""
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
