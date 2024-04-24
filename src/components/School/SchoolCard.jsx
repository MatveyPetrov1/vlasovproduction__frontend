import React from "react";
import Carousel from "react-bootstrap/Carousel";
import MainCarousel from "./MainCarousel.jsx";
import { useDispatch } from "react-redux";
import { setCurrentImage } from "../../redux/slices/components/bigSliderSlice.js";
import SchoolCardAbout from "./SchoolCardAbout.jsx";

const SchoolPhotographyCard = ({
  title,
  price,
  content,
  desc,
  pages,
  subdesc,
  secondSubdesc,
  smallSlider,
  bigSlider,
  subpages,
  quintupleImage,
  tripleImage,
  quarterImage,
  isMobile,
  firstCard,
}) => {
  const dispatch = useDispatch();

  const [isOpenCarousel, setIsOpenCarousel] = React.useState(false);
  const [color, setColor] = React.useState("black");
  const [isLoadedMainImage, setIsLoadedMainImage] = React.useState(false);
  const [countLoadSmallImages, setCountLoadSmallImages] = React.useState(0);
  const [isLoadedAll, setIsLoadedAll] = React.useState(false);

  React.useEffect(() => {
    if (quintupleImage && countLoadSmallImages >= 5 && isLoadedMainImage) {
      setIsLoadedAll(true);
    } else if (quarterImage && countLoadSmallImages >= 4 && isLoadedMainImage) {
      setIsLoadedAll(true);
    } else if (tripleImage && countLoadSmallImages >= 3 && isLoadedMainImage) {
      setIsLoadedAll(true);
    }
  }, [
    countLoadSmallImages,
    isLoadedMainImage,
    quintupleImage,
    quarterImage,
    tripleImage,
  ]);

  const onClickColor = (col) => {
    if (col === color) {
      return;
    } else {
      setColor(col);
      setIsLoadedMainImage(false);
      setCountLoadSmallImages(0);
    }
  };

  // On click to image

  const onClickImage = (index) => {
    dispatch(setCurrentImage(index));
    setIsOpenCarousel(true);
  };

  // Main carousel function

  const openMainCarousel = (color) => {
    return (
      <MainCarousel
        onClickClose={() => setIsOpenCarousel(false)}
        bigSlider={bigSlider[`${color}`]}
      />
    );
  };

  // Small carousel function

  const openSmallCarousel = (color) => {
    return (
      <div className="school__card__carousel__container load_animation">
        <div className="spin__loader"></div>
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
                  className="school__card__carousel_item"
                  onClick={() => onClickImage(index)}
                  key={index}
                >
                  <img
                    src={`${url[`${color}`]}`}
                    alt=""
                    className="active"
                    onLoad={() => {
                      setIsLoadedMainImage(true);
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

  // onLoadSmallPictures

  const onLoadSmallPictures = () => {
    setCountLoadSmallImages((prev) => {
      return prev + 1;
    });
  };

  // Small pictures function

  const openPictures = (color) => {
    return content.imageUrl.map((source, index) => {
      return (
        <div
          className="school__card__right__content__secondary__container load_animation"
          key={index}
        >
          <div className="spin__loader"></div>
          <img
            key={index}
            src={source[`${color}`]}
            onClick={() => onClickImage(index)}
            onLoad={onLoadSmallPictures}
            className={isLoadedAll ? "loaded" : ""}
            alt="secondary_pic"
          />
        </div>
      );
    });
  };

  return (
    <div className="school__card">
      {/* Main carousel */}

      {isOpenCarousel && openMainCarousel(color)}

      {/* Card left  */}

      <div className="school__card__left">
        {firstCard ? (
          <div
            className={
              isMobile
                ? "school__card__left__title"
                : "school__card__left__title wow"
            }
            style={isMobile ? { animation: "none" } : {}}
          >
            <h1 className="school__card__left__title__main">{title}</h1>
            <p className="school__card__left__title__price">{price}</p>
          </div>
        ) : (
          <>
            <div className="school__card__left__title school__card2__right__title__mobile">
              <h1 className="school__card__left__title__main">{title}</h1>
              <p className="school__card__left__title__price">{price}</p>
            </div>
            <div className="school__card__right__content">
              <div className="school__card__right__content__left">
                <div className="school__card2__hit">ХИТ</div>
                <div className="school__card__right__content__left__colors school__card2__colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="51"
                    height="52"
                    viewBox="0 0 51 52"
                    fill="none"
                    onClick={() => onClickColor("black")}
                    className={color === "black" && "active"}
                  >
                    <circle cx="25.4126" cy="25.895" r="25.4126" fill="black" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="51"
                    height="52"
                    viewBox="0 0 51 52"
                    fill="none"
                    onClick={() => onClickColor("grey")}
                    className={color === "grey" && "active"}
                  >
                    <circle
                      cx="25.4126"
                      cy="25.7407"
                      r="25.4126"
                      fill="#CFCFCF"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    onClick={() => onClickColor("brown")}
                    className={color === "brown" && "active"}
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

                {/* Small carousel */}

                {color === "black" && openSmallCarousel("black")}
                {color === "grey" && openSmallCarousel("grey")}
                {color === "brown" && openSmallCarousel("brown")}
              </div>

              {/* Small pictures */}

              <div className="school__card__right__content__secondary">
                {color === "black" && openPictures("black")}
                {color === "grey" && openPictures("grey")}
                {color === "brown" && openPictures("brown")}
              </div>
            </div>
          </>
        )}
        <div className="school__card__left__desc">
          <ul className="school__card__left__desc__items">
            {desc.map((value, index) => {
              return (
                <li className="school__card__left__desc__item" key={index}>
                  {value}
                </li>
              );
            })}
          </ul>
          <p className="school__card__left__desc__subdesc">{subdesc}</p>
          <p className="school__card__left__desc__subdesc">{secondSubdesc}</p>
        </div>
      </div>

      {/* Card right  */}

      <div className="school__card__right">
        {firstCard ? (
          <div className="school__card__right__content">
            <div className="school__card__right__content__left">
              <div className="school__card__right__content__left__colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="52"
                  viewBox="0 0 51 52"
                  fill="none"
                  onClick={() => onClickColor("black")}
                  className={color === "black" && "active"}
                >
                  <circle cx="25.4126" cy="25.895" r="25.4126" fill="black" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="52"
                  viewBox="0 0 51 52"
                  fill="none"
                  onClick={() => onClickColor("grey")}
                  className={color === "grey" && "active"}
                >
                  <circle
                    cx="25.4126"
                    cy="25.7407"
                    r="25.4126"
                    fill="#CFCFCF"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                  onClick={() => onClickColor("brown")}
                  className={color === "brown" && "active"}
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

              {/* Small carousel */}

              {color === "black" && openSmallCarousel("black")}
              {color === "grey" && openSmallCarousel("grey")}
              {color === "brown" && openSmallCarousel("brown")}
            </div>

            {/* Small pictures */}

            <div className="school__card__right__content__secondary">
              {color === "black" && openPictures("black")}
              {color === "grey" && openPictures("grey")}
              {color === "brown" && openPictures("brown")}
            </div>
          </div>
        ) : (
          <div
            className={
              isMobile
                ? "school__card__left__title school__card2__right__title"
                : "school__card__left__title card2 school__card2__right__title wow"
            }
            style={isMobile ? { animation: "none" } : {}}
          >
            <h1 className="school__card__left__title__main">{title}</h1>
            <p className="school__card__left__title__price">{price}</p>
          </div>
        )}
        {/* Mobile desc  */}

        <div className="school__card__left__desc__mobile">
          <ul className="school__card__left__desc__items">
            {desc.map((value, index) => {
              return (
                <li className="school__card__left__desc__item" key={index}>
                  {value}
                </li>
              );
            })}
          </ul>
          <p className="school__card__left__desc__subdesc">{subdesc}</p>
        </div>
        <div className="school__card__right__about">
          <ul>
            {pages.map((obj, index) => {
              return <SchoolCardAbout {...obj} key={index} />;
            })}
          </ul>
          {subpages && (
            <div className="school__card__right__about__subdesc">
              <p>{subpages}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolPhotographyCard;
