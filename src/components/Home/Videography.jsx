import React from "react";
import { Link } from "react-router-dom";
import { setApplicationIsOpen } from "../../redux/slices/components/applicationSlice";
import { useDispatch } from "react-redux";

const Videography = ({ isMobile }) => {
  const dispatch = useDispatch();
  return (
    <div className="videography">
      <div className="container">
        <div className="wrapper">
          <div className="videography__title">Видеосъемка</div>
          <div
            className={
              isMobile ? "videography__block" : "videography__block wow"
            }
            style={isMobile ? { animation: "none" } : {}}
          >
            <h1 className="videography__block__title">
              По вопросам видеосъемки обращаться к менеджеру
            </h1>
            <Link
              className="button videography__block__button"
              to="/"
              onClick={() => dispatch(setApplicationIsOpen(true))}
            >
              Связаться
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videography;
