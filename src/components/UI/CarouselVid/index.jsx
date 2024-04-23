import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./carousel.module.scss";

const CarouselVid = ({ sliderVideos, isMobileAnimation }) => {
  const carouselVidRef = React.useRef();

  return (
    <div ref={carouselVidRef}>
      <Carousel
        data-bs-theme="dark"
        className={
          isMobileAnimation ? `${styles.carousel}` : `${styles.carousel} wow`
        }
        style={isMobileAnimation ? { animation: "none" } : {}}
      >
        {sliderVideos.map((obj, index) => {
          return (
            <Carousel.Item key={index}>
              <div key={index} className={styles.carousel__items}>
                <div className={styles.carousel__items__container}>
                  <iframe
                    src={obj.video1}
                    frameBorder="0"
                    title={index}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowfullscreen
                    className={styles.carousel__items__content}
                  ></iframe>
                </div>
                <div className={styles.carousel__items__container}>
                  <iframe
                    src={obj.video2}
                    frameBorder="0"
                    title={index}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowfullscreen
                    className={styles.carousel__items__content}
                  ></iframe>
                </div>
                <div className={styles.carousel__items__container}>
                  <iframe
                    src={obj.video3}
                    frameBorder="0"
                    title={index}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowfullscreen
                    className={styles.carousel__items__content}
                  ></iframe>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselVid;
