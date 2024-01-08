import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import PhotographyCard from "./PhotographyCard";
import PhotographyCard2 from "./PhotographyCard2";
import { setPhotographyOffset } from "../../../redux/slices/offsetSlice";

const Photography = ({ photographyCards }) => {
  const photoRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const getPhotographyOffset = () => {
      const newOffset = photoRef.current.offsetTop;
      dispatch(setPhotographyOffset(newOffset));
    };
    getPhotographyOffset();
    window.addEventListener("resize", getPhotographyOffset);
    return () => {
      window.removeEventListener("resize", getPhotographyOffset);
    };
  }, []);

  return (
    <div className="photography" ref={photoRef}>
      <div className="container">
        <div className="wrapper">
          <div className="photography__wrapper">
            <div className="photography__title wow animate__animated animate__fadeInLeftBig">
              Фотосъемка
            </div>
            {/* {photographyCards.map((obj, index) => {
              return index === 0 || index % 2 === 0 ? (
                <PhotographyCard key={index} {...obj} />
              ) : (
                <PhotographyCard2 key={index} {...obj} />
              );
            })} */}
            {photographyCards.map((obj, index) => {
              return <PhotographyCard key={index} {...obj} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
