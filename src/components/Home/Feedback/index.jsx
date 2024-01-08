import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setfeedbackOffset } from "../../../redux/slices/offsetSlice";

import FeedbackCarousel from "../../FeedbackCarousel";

const Feedback = ({ videoArr, feedbackCards }) => {
  const dispatch = useDispatch();
  const feedbackRef = useRef();
  useEffect(() => {
    const getFeedbackOffset = () => {
      const newOffset = feedbackRef.current.offsetTop;
      dispatch(setfeedbackOffset(newOffset));
    };
    getFeedbackOffset();
    window.addEventListener("resize", getFeedbackOffset);
    return () => {
      window.removeEventListener("resize", getFeedbackOffset);
    };
  }, []);

  return (
    <div className="feedback" ref={feedbackRef}>
      <div className="feedback__title">
        <h1>Отзывы</h1>
      </div>
      <div className="feedback__videos">
        {videoArr.map((obj, index) => {
          return <video key={index} src={obj} alt="" />;
        })}
      </div>
      <div className="feedback__carousel">
        <FeedbackCarousel />
      </div>
    </div>
  );
};

export default Feedback;
