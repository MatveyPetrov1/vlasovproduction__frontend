import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Promo from "../components/Home/Promo";
import AboutUs from "../components/Home/AboutUs";
import Photography from "../components/Home/Photography";
import Videography from "../components/Home/Videography";
import Backstage from "../components/Home/Backstage";
import Application from "../components/Application";
import Feedback from "../components/Home/Feedback/index";
import { fetchHomeItems } from "../redux/slices/homeItems";
import Loader from "../components/Loader";
import WOW from "wow.js";
import Arrow from "../components/Arrow";

const HomePage = () => {
  const dispatch = useDispatch();

  const wow = new WOW();
  wow.init();

  const applicationRef = useRef();
  const { items, status } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchHomeItems());
  }, []);

  return (
    <>
      {status === "loading" ? (
        <Loader />
      ) : (
        <div className=" wow animate__animated animate__fadeIn">
          <Arrow />
          <div className="fullscreen__wrapper ">
            {/* <Header onScrollTo={onScrollTo} /> */}
            <Promo bgImage={items.bgImage} />
          </div>
          <AboutUs {...items.aboutUs} />
          <div className="homepage__bg">
            <Photography photographyCards={items.photographyCards} />
            <Videography />
            <Backstage
              sliderImages={items.backstageImages}
              sliderVideos={items.backstageVideos}
            />
            <Feedback
              videoArr={items.feedbackVideos}
              feedbackCards={items.feedbackCards}
            />
            <div ref={applicationRef}>
              <Application />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
