import React from "react";

const PromotionItem = ({
  title,
  blockTitle,
  blockText,
  mainImageUrl,
  imageUrl,
  onClickOpenImage,
  isMobile,
}) => {
  return (
    <div className="promotion__item">
      <div className="promotion__item__title">{title}</div>
      <div
        className={
          isMobile ? "promotion__item__block" : "promotion__item__block wow"
        }
        style={isMobile ? { animation: "none" } : {}}
      >
        <div className="promotion__item__block__left">
          <h1>{blockTitle} </h1>
          <p>{blockText}</p>
        </div>
        <div className="promotion__item__block__right">
          <div className="promotion__item__block__right__main">
            <div
              className="promotion__item__block__right__image"
              style={{
                backgroundImage: `url(${mainImageUrl})`,
              }}
              onClick={() => onClickOpenImage(mainImageUrl)}
              alt=""
            ></div>
          </div>
          <div className="promotion__item__block__right__secondary">
            {imageUrl.map((source, index) => {
              return (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${source})` }}
                  onClick={() => onClickOpenImage(source)}
                  className="promotion__item__block__right__image"
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionItem;
