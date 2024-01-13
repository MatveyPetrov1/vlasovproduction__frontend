import React, { useState } from "react";
import ArrowRight from "../../assets/img/school__arrow_right.svg";
const SmallSlider = ({ onClickClose, bigSlider }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const onClickRight = () => {
    setCurrentImage((prev) => {
      const count = prev + 1;
      const result = Math.min(count, bigSlider.length - 1);
      return result;
    });
  };
  const onClickLeft = () => {
    setCurrentImage((prev) => {
      const count = prev - 1;
      const result = Math.max(count, 0);
      return result;
    });
  };

  return (
    <div className="school__slider__background">
      <div className="school_slider__blocks">
        <div className="school_slider__left_block" onClick={onClickLeft}>
          <svg
            width="70"
            height="70"
            viewBox="0 0 24 24"
            fill="#fff"
            className="school_slider__arrow"
            onClick={onClickLeft}
          >
            <polygon points="15.293 3.293 6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293" />
          </svg>
        </div>
        <div className="school_slider__right_block" onClick={onClickRight}>
          <svg
            className="school_slider__arrow"
            onClick={onClickRight}
            width="70"
            height="70"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
          </svg>
        </div>
      </div>
      <svg
        height="512px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        width="512px"
        fill="#fff"
        onClick={onClickClose}
        className="school_slider__close_icon"
      >
        <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
      </svg>

      <div className="school_slider">
        <div className="school_slider__items">
          {bigSlider.map((url, index) => (
            <img src={currentImage === index ? url : ""} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallSlider;
