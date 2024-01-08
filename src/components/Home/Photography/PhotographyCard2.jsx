import React from "react";
import { Link } from "react-router-dom";

const PhotographyCard = ({ imageUrl, url1, url2, text, title }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="photography__card">
      {/* <img className="photography__card__image" src={imageUrl} alt="" /> */}

      <div className="photography__card__content">
        <div className="photography__card__images"></div>
        <h1>{title}</h1>
        {/* <p>{text}</p> */}
        <div className="photography__buttons">
          <Link
            className="button photography__button"
            to={url1}
            onClick={scrollToTop}
          >
            Портфолио
          </Link>
          <Link
            className="button photography__button"
            to={url2}
            onClick={scrollToTop}
          >
            Хочу съемку
          </Link>
        </div>
      </div>
      <div className="photography__card__left">
        <div
          style={{
            backgroundImage: `url("${imageUrl}")`,
          }}
          className="photography__card__image"
        ></div>
        <div
          className="photography__card__images"
          style={{
            backgroundImage: `url('https://sun9-48.userapi.com/impg/8O5cwLnX1CyUyFoS6ipcDCKj6qKJ4X5Q5bTiEA/NtMFrZzogCg.jpg?size=510x510&quality=95&sign=eae49af7498fc20216f444f8cf1623e6&c_uniq_tag=plWq36G3s86fA1e9d4afaNW_lTQ3HBNRuSGB7DQ7qFI&type=album')`,
          }}
        ></div>
        <div className="photography__card__images">
          <div
            style={{
              backgroundImage: `url('https://sun9-48.userapi.com/impg/8O5cwLnX1CyUyFoS6ipcDCKj6qKJ4X5Q5bTiEA/NtMFrZzogCg.jpg?size=510x510&quality=95&sign=eae49af7498fc20216f444f8cf1623e6&c_uniq_tag=plWq36G3s86fA1e9d4afaNW_lTQ3HBNRuSGB7DQ7qFI&type=album')`,
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url('https://sun9-48.userapi.com/impg/8O5cwLnX1CyUyFoS6ipcDCKj6qKJ4X5Q5bTiEA/NtMFrZzogCg.jpg?size=510x510&quality=95&sign=eae49af7498fc20216f444f8cf1623e6&c_uniq_tag=plWq36G3s86fA1e9d4afaNW_lTQ3HBNRuSGB7DQ7qFI&type=album')`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PhotographyCard;
