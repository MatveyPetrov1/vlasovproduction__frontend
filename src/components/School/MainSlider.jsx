import React, { useState, useRef, useEffect } from "react";
import ArrowLeft from "../../assets/img/school__arrow_left.svg";
import ArrowRight from "../../assets/img/school__arrow_right.svg";
const SmallSlider = ({ onClickClose }) => {
  const bigSliderImages = [
    "https://avatars.mds.yandex.net/i?id=43f1a029d98aef8cb0091dba04947086_l-5292126-images-thumbs&n=27&h=480&w=480",
    "https://kartinki.pics/src.php?src=https://kartinki.pics/uploads/posts/2022-02/1645764570_1-kartinkin-net-p-na-profil-kartinki-1.jpg&w=315&h=455",
    "https://fantiky.ru/wp-content/uploads/2023/03/tiger-130323-1-576x1024-1-450x800.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const onClickRight = () => {
    setCurrentImage((prev) => {
      const count = prev + 1;
      const result = Math.min(count, bigSliderImages.length - 1);
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
      <div className="school_slider">
        <svg
          height="512px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
          className="school_slider__close_icon"
          fill="#fff"
          onClick={onClickClose}
        >
          <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
        </svg>
        <img
          src={ArrowLeft}
          alt=""
          className="school_slider__arrow"
          onClick={onClickLeft}
        />
        <div className="school_slider__items">
          {bigSliderImages.map((url, index) => (
            <img src={currentImage === index ? url : ""} />
          ))}
        </div>
        <img
          src={ArrowRight}
          onClick={onClickRight}
          alt=""
          className="school_slider__arrow"
        />
      </div>
    </div>
  );
};

export default SmallSlider;
