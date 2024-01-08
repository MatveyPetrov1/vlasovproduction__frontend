import React from "react";

const FeedBackCard = ({ name, deal, text }) => {
  return (
    <div className="feedback__card">
      <h1>{name}</h1>
      <p className="feedback__card__deal">{deal}</p>
      <p className="feedback__card__text">{text}</p>
    </div>
  );
};

export default FeedBackCard;
