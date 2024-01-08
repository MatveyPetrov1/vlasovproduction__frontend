import React, { useState } from "react";
import MainSlider from "./MainSlider";
import { Carousel } from "react-bootstrap";

const SchoolPhotography2 = ({
  title,
  price,
  desc,
  content,
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
    <div className="school__card2">
      {isOpen && <MainSlider onClickClose={onClickClose} />}
      <div className="school__card2__left">
        <div className="school__card2__left__content">
          <div className="school__card2__left__content__main">
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
          </div>
          <div className="school__card2__left__content__second">
            <video src={content.videoUrl[0]}></video>
            {content.imageUrl.map((source, index) => {
              return <img key={index} src={source}></img>;
            })}
          </div>
        </div>
        <div className="school__card2__left__about">
          <ul>
            {desc.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
          <p>{subdesc}</p>
        </div>
      </div>
      <div className="school__card2__right">
        <div className="school__card2__right__title">
          <h1>{title}</h1>
          <p>{price}</p>
        </div>
        <div className="school__card2__right__desc">
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

export default SchoolPhotography2;
