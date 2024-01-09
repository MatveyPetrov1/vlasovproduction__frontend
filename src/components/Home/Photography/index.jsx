import React, { useRef } from "react";
import PhotographyCard from "./PhotographyCard";

const Photography = ({ photographyCards }) => {
  const photoRef = useRef();

  return (
    <div className="photography" ref={photoRef}>
      <div className="container">
        <div className="wrapper">
          <div className="photography__wrapper">
            <div className="photography__title wow animate__animated ">
              Фотосъемка
            </div>
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
