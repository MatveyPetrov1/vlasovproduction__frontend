import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselVid = ({ sliderVideos }) => {
  return (
    <Carousel data-bs-theme="dark" className="carousel">
      {sliderVideos.map((obj, index) => {
        return (
          <Carousel.Item>
            <div key={index} className="carousel__items">
              <video
                className="carousel__items__content"
                src={obj.video1}
              ></video>
              <video
                className="carousel__items__content"
                src={obj.video2}
              ></video>
              <video
                className="carousel__items__content"
                src={obj.video3}
              ></video>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselVid;
