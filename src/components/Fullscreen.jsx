import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../redux/slices/fullscreenHomeSlice";

const Fullscreen = () => {
  const { currentImage, isOpen } = useSelector((state) => state.homeFullscreen);
  const dispatch = useDispatch();

  return (
    <>
      {isOpen && (
        <div className="fullscreen__photography">
          <img src={currentImage} alt="" />
          <div className="fullscreen__photography__wrapper">
            <svg
              height="512px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
              className="fullscreen__photography__closeIcon"
              onClick={() => dispatch(setIsOpen(false))}
            >
              <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default Fullscreen;
