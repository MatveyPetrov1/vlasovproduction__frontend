import React from "react";
import { useDispatch } from "react-redux";
import { setfeedbackOffset } from "../../../redux/slices/components/feedbackTop";
import FeedbackCarousel from "../../UI/FeedbackCarousel";
import CarouselVid from "../../UI/CarouselVid";
import FeedbackVideo from "./FeedbackVideo";

const Feedback = ({
  videoArr,
  feedbackCards,
  feedbackCardsMobile,
  feedbackMobileVideos,
  isMobileAnimation,
}) => {
  const feedbackRef = React.useRef();
  const [isMobile, setIsMobile] = React.useState(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setfeedbackOffset(feedbackRef.current.offsetTop));

    if (feedbackRef.current.offsetWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    const resizeHandler = () => {
      if (feedbackRef.current.offsetWidth <= 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }

      dispatch(setfeedbackOffset(feedbackRef.current.offsetTop));
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="feedback" ref={feedbackRef}>
      <div className="feedback__title">
        <h1>Отзывы</h1>
      </div>
      {/* Feedback videos */}
      <div
        className={
          isMobileAnimation ? "feedback__videos" : "feedback__videos wow"
        }
        style={isMobileAnimation ? { animation: "none" } : {}}
      >
        {isMobile ? (
          <div className="backstage__items">
            {feedbackMobileVideos.map((source, index) => (
              <FeedbackVideo key={index} source={source} />
            ))}
          </div>
        ) : (
          <CarouselVid sliderVideos={videoArr} mobileSliderVideos={videoArr} />
        )}
      </div>

      {/* Feedback cards carousel */}

      <div className="feedback__carousel">
        <FeedbackCarousel
          feedbackCards={feedbackCards}
          feedbackCardsMobile={feedbackCardsMobile}
        />
      </div>
    </div>
  );
};

export default Feedback;
