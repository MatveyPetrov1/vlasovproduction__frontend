import React from "react";
import PhotographyCard from "./PhotographyCard";

const Photography = ({ photographyCards, isMobile }) => {
  return (
    <div className="photography">
      {photographyCards && (
        <div className="container">
          <div className="wrapper">
            <div className="photography__title">Фотосъемка</div>
            {photographyCards.map((obj, index) => {
              return (
                <PhotographyCard key={index} {...obj} isMobile={isMobile} />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Photography;
