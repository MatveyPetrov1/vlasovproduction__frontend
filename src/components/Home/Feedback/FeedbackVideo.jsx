import React from "react";

const FeedbackVideo = ({ source }) => {
  return (
    <div className="backstage__items__container">
      {" "}
      <iframe
        src={source}
        frameborder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowfullscreen
        className="backstage__items__item"
      ></iframe>
    </div>
  );
};

export default FeedbackVideo;
