import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSlider from "./MainSlider";

const SchoolPhotographyCard = ({
  title,
  price,
  content,
  desc,
  pages,
  subdesc,
  smallSlider,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickClose = () => {
    setIsOpen(false);
  };
  const onClickOpen = () => {
    setIsOpen(true);
  };
  return (
    <div className="school__card">
      {isOpen && <MainSlider onClickClose={onClickClose} />}
      <div className="school__card__left">
        <div className="school__card__left__title">
          <h1>{title}</h1>
          <p>{price}</p>
        </div>
        <div className="school__card__left__desc">
          <ul>
            {desc.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
          <p>{subdesc}</p>
        </div>
      </div>
      <div className="school__card__right">
        <div className="school__card__right__content">
          <Carousel className="school__card__slider" data-bs-theme="dark">
            {smallSlider.map((url, index) => {
              return (
                <Carousel.Item>
                  <div
                    className="school__card__slider_item"
                    onClick={onClickOpen}
                    key={index}
                    style={{
                      backgroundImage: `url("${url}")`,
                    }}
                  ></div>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <div className="school__card__right__content__second">
            <video src={content.videoUrl[1]}></video>
            {content.imageUrl.map((source, index) => {
              return <img key={index} src={source} onClick={onClickOpen}></img>;
            })}
          </div>
        </div>
        <div className="school__card__right__about">
          <ul>
            {pages.map((obj, index) => {
              return (
                <li key={index}>
                  <span>{obj.fat}</span>
                  {obj.simple}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SchoolPhotographyCard;
