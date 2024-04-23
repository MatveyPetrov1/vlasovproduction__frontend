import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import FeedbackCard from "./FeedbackCard";
import styles from "./feedbackcarousel.module.scss";
import car__styles from "../CarouselVid/carousel.module.scss";

const FeedbackCarousel = ({ feedbackCards, feedbackCardsMobile }) => {
  const [isMobile, setIsMobile] = useState(false);

  const carouselRef = useRef();

  useEffect(() => {
    if (carouselRef.current.offsetWidth <= 520) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    const handleWidth = () => {
      const width = carouselRef.current.offsetWidth;
      if (width <= 520) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <div ref={carouselRef}>
      {/* Mobile version */}

      {isMobile ? (
        <Carousel data-bs-theme="dark" className={car__styles.carousel}>
          {feedbackCardsMobile.map((obj, index) => {
            return (
              <Carousel.Item key={index}>
                <div className={styles.feedback__carousel__items}>
                  <FeedbackCard {...obj} />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      ) : (
        // Default version

        <Carousel data-bs-theme="dark" className={car__styles.carousel}>
          {feedbackCards.map((obj, index) => {
            return (
              <Carousel.Item key={index}>
                <div className={styles.feedback__carousel__items}>
                  <FeedbackCard {...obj.page1} />
                  <FeedbackCard {...obj.page2} />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default FeedbackCarousel;
