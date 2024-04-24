import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Promo from "../components/Home/Promo";
import AboutUs from "../components/Home/AboutUs";
import Photography from "../components/Home/Photography";
import Videography from "../components/Home/Videography";
import Backstage from "../components/Home/Backstage/Backstage";
import Application from "../components/UI/Application/index";
import Feedback from "../components/Home/Feedback/index";
import { fetchHomeItems } from "../redux/slices/pages/homeItems";
import Loader from "../components/UI/Loader";
import Arrow from "../components/UI/Arrow";
import Fullscreen from "../components/UI/Fullscreen";
import { useInView } from "react-intersection-observer";
import WOW from "wowjs";
import { useMobile } from "../hooks/useMobile";

const HomePage = () => {
  const dispatch = useDispatch();

  new WOW.WOW().init();

  const homeRef = useRef();
  const applicationRef = useRef();

  const { items, status } = useSelector((state) => state.home);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { isMobile } = useMobile();

  useEffect(() => {
    dispatch(fetchHomeItems());
  }, []);

  return (
    <>
      {status === "loading" ? (
        <Loader className="loader" />
      ) : (
        <div className="main__fade" ref={homeRef}>
          <Fullscreen />

          {inView && <Arrow />}

          <Promo />

          <AboutUs {...items.aboutUs} />

          <div className="homepage__bg" ref={ref}>
            <Photography
              photographyCards={items.photographyCards}
              isMobile={isMobile}
            />

            <Videography isMobile={isMobile} />

            <Backstage
              sliderVideos={items.backstageVideos}
              mobileSliderVideos={items.backstageVideosMobile}
              isMobileAnimation={isMobile}
            />

            <Feedback
              videoArr={items.feedbackVideos}
              feedbackCards={items.feedbackCards}
              feedbackCardsMobile={items.feedbackCardsMobile}
              feedbackMobileVideos={items.feedbackVideosMobile}
              isMobileAnimation={isMobile}
            />

            <div ref={applicationRef}>
              <Application isWindow={false} applicationIsOpen={true} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
