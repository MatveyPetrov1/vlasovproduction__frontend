import React from "react";
import Carousel from "react-bootstrap/Carousel";
import FeedbackCard from "./Home/Feedback/FeedbackCard";

const card1 = {
  name: "Matvey",
  deal: "dsfsfsd",
  text: `loremloremloremloremloremloreml
	oremloremloremloremloremloremlorem
	loremloremlorem`,
};

const card2 = {
  name: "Matvey",
  deal: "dsfsfsd",
  text: `loremloremloremloremloremloreml
	oremloremloremloremloremloremlorem
	loremloremlorem`,
};

const FeedbackCarousel = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark" className="carousel">
        <Carousel.Item>
          <div className="feedback__carousel__items">
            <FeedbackCard {...card1} />
            <FeedbackCard {...card2} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="feedback__carousel__items">
            <FeedbackCard {...card1} />
            <FeedbackCard {...card2} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="feedback__carousel__items">
            <FeedbackCard {...card1} />
            <FeedbackCard {...card2} />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default FeedbackCarousel;
