import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Application from "../components/UI/Application/index";
import { fetchPromotionItems } from "../redux/slices/pages/promotionItems";
import Loader from "../components/UI/Loader";
import { setCurrentPage } from "../redux/slices/components/headerSlice";
import Fullscreen from "../components/UI/Fullscreen";
import {
  setIsOpen,
  setCurrentImage,
} from "../redux/slices/components/fullscreenSlice";
import FeedbackCarousel from "../components/UI/FeedbackCarousel";
import WOW from "wowjs";
import PromotionItem from "../components/Promotion/PromotionItem";

const Promotion = () => {
  new WOW.WOW().init();
  const dispatch = useDispatch();

  const [topImageIsActive, setTopImageIsActive] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState();

  const { items, status } = useSelector((state) => state.promotion);

  const promotionRef = React.useRef();

  // On click to image

  const onClickOpenImage = (source) => {
    dispatch(setIsOpen(true));
    dispatch(setCurrentImage(source));
  };

  useEffect(() => {
    dispatch(setCurrentPage(2));
    dispatch(fetchPromotionItems());
  }, []);

  useEffect(() => {
    if (status === "loaded" && promotionRef.current.offsetWidth <= 768) {
      setIsMobile(true);
    } else if (status === "loaded" && promotionRef.current.offsetWidth > 768) {
      setIsMobile(false);
    }

    const handleResize = () => {
      if (status === "loaded" && promotionRef.current.offsetWidth <= 768) {
        setIsMobile(true);
      } else if (
        status === "loaded" &&
        promotionRef.current.offsetWidth > 768
      ) {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [status]);

  return (
    <>
      {status === "loading" ? (
        <Loader />
      ) : (
        <div className="promotion main__fade" ref={promotionRef}>
          {/* Promotion fullscreen */}

          <Fullscreen />

          {/* Top image  */}

          <div className="topimage load_animation">
            <img
              src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/P8BA/arYqUBfDA/acbe09be-b23b-f774-4ad3-83ef4d782821"
              alt=""
              className={
                topImageIsActive
                  ? "topimage__image promotion__bg active"
                  : "topimage__image promotion__bg"
              }
              onLoad={() => {
                setTopImageIsActive(true);
              }}
            />
          </div>
          <div className="promotion__background__white">
            <div className="promotion__background">
              <div className="container">
                <div className="wrapper">
                  {/* Promotion cards  */}

                  {items.cards.map((obj, index) => {
                    return (
                      <PromotionItem
                        key={index}
                        {...obj}
                        onClickOpenImage={onClickOpenImage}
                        isMobile={isMobile}
                      />
                    );
                  })}

                  <div className="promotion__aboutus">
                    <div className="promotion__aboutus__title">
                      Что говорят о нас
                    </div>
                  </div>
                </div>
              </div>

              {/* Promotion feedback cards  */}

              <div className="feedback__carousel promotion__feedback">
                <FeedbackCarousel
                  feedbackCards={items.feedbackCards}
                  feedbackCardsMobile={items.feedbackCardsMobile}
                />
              </div>
            </div>
            <Application />
          </div>
        </div>
      )}
    </>
  );
};

export default Promotion;
