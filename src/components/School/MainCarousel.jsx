import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentImage } from "../../redux/slices/components/bigSliderSlice";

const MainCarousel = ({ onClickClose, bigSlider }) => {
  const dispatch = useDispatch();

  const { currentImage } = useSelector((state) => state.bigSlider);

  const onClickRight = () => {
    const count = currentImage + 1;
    const result = Math.min(count, bigSlider.length - 1);
    dispatch(setCurrentImage(result));
  };

  const onClickLeft = () => {
    const count = currentImage - 1;
    const result = Math.max(count, 0);
    dispatch(setCurrentImage(result));
  };

  return (
    // Carousel background and blocks

    <div className="school__carousel__background">
      {/* Close carousel  */}
      <div className="school__carousel__close" onClick={onClickClose}>
        <svg
          onClick={onClickClose}
          className="school__carousel__close_icon"
          viewBox="0 0 24 24"
          width="50px"
          height="50px"
          fill="#fff"
        >
          <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
        </svg>
      </div>
      {/* Counter  */}
      <div className="school__carousel__count">
        {currentImage + 1}/{bigSlider.length}
      </div>
      {/* Front blocks */}
      <div className="school__carousel__blocks">
        <div className="school__carousel__left_block" onClick={onClickLeft}>
          <svg
            width="70"
            height="70"
            viewBox="0 0 24 24"
            fill="#fff"
            className="school__carousel__arrow"
            onClick={onClickLeft}
          >
            <polygon points="15.293 3.293 6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293" />
          </svg>
        </div>
        <div className="school__carousel__right_block" onClick={onClickRight}>
          <svg
            className="school__carousel__arrow"
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
      {/* Carousel  */}
      <div className="school__carousel">
        <div className="school__carousel__items">
          {bigSlider.map((url, index) => (
            <img
              className={
                currentImage === index
                  ? "school__carousel__items__item active"
                  : "school__carousel__items__item"
              }
              src={currentImage === index && url}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
