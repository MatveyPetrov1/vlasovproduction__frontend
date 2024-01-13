import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../../redux/slices/headerSlice";
import {
  setCurrentImage,
  setIsOpen,
} from "../../../redux/slices/fullscreenHomeSlice";

const PhotographyCard = ({
  mainImageUrl,
  secondaryImagesUrl,
  url1,
  url2,
  title,
}) => {
  const dispatch = useDispatch();
  const onClickButton = (page) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (page === 1) {
      dispatch(setCurrentPage(1));
    }

    dispatch(setCurrentPage(2));
  };

  const onClickPhotography = (url) => {
    dispatch(setCurrentImage(url));
    dispatch(setIsOpen(true));
  };

  return (
    <div className="photography__card">
      <div className="photography__card__left">
        <div
          style={{
            backgroundImage: `url("${mainImageUrl}")`,
          }}
          className="photography__card__image"
          onClick={() => onClickPhotography(mainImageUrl)}
        ></div>

        <div className="photography__card__images">
          {secondaryImagesUrl.map((url, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url("${url}")`,
                }}
                onClick={() => onClickPhotography(url)}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="photography__card__content">
        <div className="photography__card__images"></div>
        <h1>{title}</h1>
        <div className="photography__buttons">
          <Link
            className="button photography__button"
            to={url1}
            onClick={() => onClickButton(1)}
          >
            Портфолио
          </Link>
          <Link
            className="button photography__button"
            to={url2}
            onClick={() => onClickButton(2)}
          >
            Хочу съемку
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotographyCard;
