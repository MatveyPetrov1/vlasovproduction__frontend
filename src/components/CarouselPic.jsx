import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselPic = ({ sliderImages }) => {
  return (
    <Carousel data-bs-theme="dark" className="carousel">
      {sliderImages.map((obj) => {
        return (
          <Carousel.Item>
            <div className="carousel__items">
              <img className="carousel__items__content" src={obj.image1}></img>
              <img className="carousel__items__content" src={obj.image2}></img>
              <img className="carousel__items__content" src={obj.image3}></img>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselPic;
