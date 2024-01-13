import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Application from "../components/Application";
import { fetchPromotionItems } from "../redux/slices/promotionItems";
import Loader from "../components/Loader";
import CarouselVid from "../components/CarouselVid";

const Promotion = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.promotion);

  useEffect(() => {
    dispatch(fetchPromotionItems());
  }, []);

  return (
    <>
      {status === "loading" ? (
        <Loader />
      ) : (
        <div className="promotionPhotography main__fade">
          <div className="topimage"></div>
          <div className="container">
            <div className="wrapper">
              {items.cards.map((obj, index) => {
                return (
                  <div key={index} className="promotionphotography__item1">
                    <div className="promotionphotography__item1">
                      <div className="promotionphotography__item1__title">
                        {obj.title}
                      </div>
                      <div className="promotionphotography__item1__block">
                        <div className="promotionphotography__item1__block__right">
                          <h1>{obj.blockTitle} </h1>
                          <p>{obj.blockText}</p>
                        </div>
                        <div className="promotionphotography__item1__block__left">
                          <div className="promotionphotography__item1__block__left__main">
                            <img src={obj.mainImageUrl} alt="" />
                          </div>
                          <div className="promotionphotography__item1__block__left__second">
                            {obj.videoUrl.map((source, index) => {
                              return <video key={index} src={source}></video>;
                            })}
                            {obj.imageUrl.map((source, index) => {
                              return <img key={index} src={source}></img>;
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="promotionphotography__aboutus">
                <div className="promotionphotography__aboutus__title">
                  Что говорят о нас
                </div>
              </div>
            </div>
          </div>
          <div className="promotionphotography__carousel">
            <CarouselVid sliderVideos={items.videos} />
          </div>
          <Application />
        </div>
      )}
    </>
  );
};

export default Promotion;
