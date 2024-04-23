import React from "react";
import styles from "./feedbackcarousel.module.scss";

const FeedBackCard = ({ name, text }) => {
  return (
    <div className={styles.feedback__carousel__card}>
      <h1>{name}</h1>
      <p className={styles.feedback__carousel__card__text}>{text}</p>
    </div>
  );
};

export default FeedBackCard;
