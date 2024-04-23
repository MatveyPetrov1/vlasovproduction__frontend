import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../../redux/slices/components/headerSlice";
import {
  setCurrentImage,
  setIsOpen,
} from "../../../redux/slices/components/fullscreenSlice";

const PhotographyCard = ({
  mainImageUrl,
  secondaryImagesUrl,
  url1,
  url2,
  title,
  isMobile,
}) => {
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = React.useState();

  const onClickButton = (page) => {
    if (page === 1) {
      dispatch(setCurrentPage(1));
    } else {
      dispatch(setCurrentPage(2));
    }
  };

  const onClickPhotography = (url) => {
    dispatch(setCurrentImage(url));
    dispatch(setIsOpen(true));
  };

  return (
    <div
      className={isMobile ? "photography__card" : "photography__card wow"}
      style={isMobile ? { animation: "none" } : {}}
    >
      {/* Photography left */}

      <div className="photography__card__images">
        {/* Mobile title */}

        <div className="photography__card__mobile__title">
          <h1>{title}</h1>
        </div>

        <div
          className="photography__card__images__main"
          onClick={() => onClickPhotography(mainImageUrl)}
          style={{
            backgroundImage: `url("${mainImageUrl}")`,
          }}
        ></div>

        <div className="photography__card__images__secondary">
          {secondaryImagesUrl.map((url, index) => {
            return (
              <div
                key={index}
                style={{ backgroundImage: `url("${url}")` }}
                onClick={() => onClickPhotography(url)}
              ></div>
            );
          })}
        </div>
      </div>

      {/* Photography left */}

      <div className="photography__card__desc">
        <h1>{title}</h1>
        <div className="photography__card__desc__buttons">
          <a
            className="button photography__card__desc__button"
            href={url1}
            onClick={() => onClickButton(1)}
          >
            Портфолио
          </a>
          <a
            className="button photography__card__desc__button"
            href={url2}
            onClick={() => onClickButton(2)}
          >
            Хочу съемку
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotographyCard;
