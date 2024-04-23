import React, { useState, useEffect } from "react";
import MainSlider from "./MainCarousel.jsx";
import { Carousel } from "react-bootstrap";
import { setCurrentImage } from "../../redux/slices/components/bigSliderSlice.js";
import { useDispatch } from "react-redux";
import SchoolCardDesc from "./SchoolCardDesc.jsx";

const SchoolPhotography2 = ({
  title,
  price,
  desc,
  content,
  pages,
  subdesc,
  secondSubdesc,
  smallSlider,
  bigSlider,
  subpages,
  isMobile,
}) => {
  const [isOpenCarosel, setIsOpenCarousel] = useState(false);
  const [color, setColor] = useState("black");
  const [countSmallPictures, setCountSmallPictures] = useState(0);
  const [isLoadedMain, setIsLoadedMain] = useState(false);
  const [isLoadedAll, setIsLoadedAll] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (countSmallPictures >= 5 && isLoadedMain) {
      setIsLoadedAll(true);
    }
    console.log(countSmallPictures);
  }, [countSmallPictures]);

  // On click to image

  const onClickOpen = (index) => {
    setIsOpenCarousel(true);
    dispatch(setCurrentImage(index));
  };

  // Main carousel function

  const openMainCarousel = (color) => {
    return (
      <MainSlider
        onClickClose={() => setIsOpenCarousel(false)}
        bigSlider={bigSlider[`${color}`]}
      />
    );
  };

  // Small carousel function

  const openSmallCarousel = (color) => {
    return (
      <div className="school__card__carousel__container load_animation">
        <Carousel
          className="school__card__carousel"
          style={
            isLoadedAll ? { display: "flex", transiton: "1s all ease" } : {}
          }
        >
          {smallSlider.map((url, index) => {
            return (
              <Carousel.Item key={index}>
                <div
                  className="school__card__carousel_item load_animation"
                  key={index}
                >
                  <img
                    onClick={() => onClickOpen(index)}
                    src={`${url[`${color}`]}`}
                    onLoad={() => {
                      setIsLoadedMain(true);
                    }}
                  />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  };

  // Small pictures function

  const openPictures = (color) => {
    return content.imageUrl.map((source, index) => {
      return (
        <div
          className={
            isLoadedAll && index === 0
              ? "school__card__right__content__secondary__container school__card__right__content__secondary__container__first load_animation"
              : "school__card__right__content__secondary__container  load_animation"
          }
          key={index}
        >
          <img
            key={index}
            src={source[`${color}`]}
            onClick={() => onClickOpen(index)}
            onLoad={onLoadSmallPictures}
            className="loaded"
          />
        </div>
      );
    });
  };

  const onLoadSmallPictures = () => {
    setCountSmallPictures((prev) => {
      return prev + 1;
    });
  };

  const onClickColor = (col) => {
    if (col === color) {
      return;
    } else {
      setColor(col);
      setCountSmallPictures(0);
      setIsLoadedMain(false);
    }
  };

  return (
    <div className="school__card2">
      {/* Main carousel  */}

      {isOpenCarosel && openMainCarousel(color)}

      {/* Card2 left */}

      <div className="school__card2__left">
        {/* Mobile title  */}

        <div className="school__card2__right__title school__card2__right__title__mobile">
          <h1 className="school__card2__right__title__main">{title}</h1>
          <p className="school__card2__right__title__price">{price}</p>
        </div>

        <div className="school__card2__left__content">
          <div className="school__card2__left__content__main">
            <div className="school__card2__left__content__secondary__colors__mobile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 51 52"
                fill="none"
                className={color === "black" && "active"}
                onClick={() => onClickColor("black")}
              >
                <circle cx="25.4126" cy="25.895" r="25.4126" fill="black" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 51 52"
                fill="none"
                className={color === "grey" && "active"}
                onClick={() => onClickColor("grey")}
              >
                <circle cx="25.4126" cy="25.7407" r="25.4126" fill="#CFCFCF" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 51 51"
                fill="none"
                className={color === "brown" && "active"}
                onClick={() => onClickColor("brown")}
              >
                <path
                  d="M25.4087 0.174759C22.0715 0.174759 18.7669 0.832077 15.6837 2.10918C12.6005 3.38628 9.79906 5.25816 7.43928 7.61794C5.0795 9.97772 3.20762 12.7792 1.93051 15.8624C0.65341 18.9456 -0.0039064 22.2501 -0.00390625 25.5874C-0.0039061 28.9246 0.653411 32.2292 1.93051 35.3124C3.20762 38.3956 5.0795 41.197 7.43928 43.5568C9.79906 45.9166 12.6005 47.7885 15.6837 49.0656C18.7669 50.3427 22.0715 51 25.4087 51L25.4087 25.5874L25.4087 0.174759Z"
                  fill="#412F21"
                />
                <path
                  d="M25.4077 0.174759C28.7449 0.174759 32.0495 0.832077 35.1327 2.10918C38.2159 3.38628 41.0173 5.25816 43.3771 7.61794C45.7369 9.97772 47.6088 12.7792 48.8859 15.8624C50.163 18.9456 50.8203 22.2501 50.8203 25.5874C50.8203 28.9246 50.163 32.2292 48.8859 35.3124C47.6088 38.3956 45.7369 41.197 43.3771 43.5568C41.0173 45.9166 38.2159 47.7885 35.1327 49.0656C32.0495 50.3427 28.7449 51 25.4077 51L25.4077 25.5874L25.4077 0.174759Z"
                  fill="#DBCAB8"
                />
              </svg>
            </div>
            <div className="school__card2__hit">ХИТ</div>

            {/* Small carousel  */}

            {color === "black" && openSmallCarousel("black")}
            {color === "grey" && openSmallCarousel("grey")}
            {color === "brown" && openSmallCarousel("brown")}
          </div>
          <div className="school__card2__left__content__secondary">
            <div className="school__card2__left__content__secondary__colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="52"
                viewBox="0 0 51 52"
                fill="none"
                className={color === "black" && "active"}
                onClick={() => onClickColor("black")}
              >
                <circle cx="25.4126" cy="25.895" r="25.4126" fill="black" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="52"
                viewBox="0 0 51 52"
                fill="none"
                className={color === "grey" && "active"}
                onClick={() => onClickColor("grey")}
              >
                <circle cx="25.4126" cy="25.7407" r="25.4126" fill="#CFCFCF" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                className={color === "brown" && "active"}
                onClick={() => onClickColor("brown")}
              >
                <path
                  d="M25.4087 0.174759C22.0715 0.174759 18.7669 0.832077 15.6837 2.10918C12.6005 3.38628 9.79906 5.25816 7.43928 7.61794C5.0795 9.97772 3.20762 12.7792 1.93051 15.8624C0.65341 18.9456 -0.0039064 22.2501 -0.00390625 25.5874C-0.0039061 28.9246 0.653411 32.2292 1.93051 35.3124C3.20762 38.3956 5.0795 41.197 7.43928 43.5568C9.79906 45.9166 12.6005 47.7885 15.6837 49.0656C18.7669 50.3427 22.0715 51 25.4087 51L25.4087 25.5874L25.4087 0.174759Z"
                  fill="#412F21"
                />
                <path
                  d="M25.4077 0.174759C28.7449 0.174759 32.0495 0.832077 35.1327 2.10918C38.2159 3.38628 41.0173 5.25816 43.3771 7.61794C45.7369 9.97772 47.6088 12.7792 48.8859 15.8624C50.163 18.9456 50.8203 22.2501 50.8203 25.5874C50.8203 28.9246 50.163 32.2292 48.8859 35.3124C47.6088 38.3956 45.7369 41.197 43.3771 43.5568C41.0173 45.9166 38.2159 47.7885 35.1327 49.0656C32.0495 50.3427 28.7449 51 25.4077 51L25.4077 25.5874L25.4077 0.174759Z"
                  fill="#DBCAB8"
                />
              </svg>
            </div>

            {/* Small pictures  */}

            {color === "black" && openPictures("black")}
            {color === "grey" && openPictures("grey")}
            {color === "brown" && openPictures("brown")}
          </div>
        </div>
        <div className="school__card2__left__about">
          <ul className="school__card2__left__about__items">
            {desc.map((value, index) => {
              return (
                <li className="school__card2__left__about__item" key={index}>
                  {value}
                </li>
              );
            })}
          </ul>
          <p className="school__card2__left__about__subdesc">{subdesc}</p>
          <p className="school__card2__left__about__subdesc">{secondSubdesc}</p>
        </div>
      </div>

      {/* Card 2 right  */}

      <div className="school__card2__right">
        <div
          className={
            isMobile
              ? "school__card2__right__title"
              : "school__card2__right__title wow"
          }
          style={isMobile ? { animation: "none" } : {}}
        >
          <h1 className="school__card2__right__title__main">{title}</h1>
          <p className="school__card2__right__title__price">{price}</p>
        </div>

        <div className="school__card2__right__desc">
          <ul>
            {pages.map((obj, index) => {
              return <SchoolCardDesc key={index} {...obj} />;
            })}
          </ul>

          <div className="school__card2__right__desc__subdesc">
            <p>{subpages}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolPhotography2;
