import React from "react";

const BackstageMobileVideo = ({ source }) => {
  return (
    <div className="backstage__items__container">
      <iframe
        src={source}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowfullscreen
        className="backstage__items__item"
      ></iframe>
    </div>
  );
};

export default BackstageMobileVideo;
