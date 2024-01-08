import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Videography = () => {
  const { applicationOffset } = useSelector((state) => state.offset);

  const onScrollToApplication = () => {
    window.scrollTo({
      top: applicationOffset,
      behavior: "smooth",
    });
  };

  return (
    <div className="videography">
      <div className="container">
        <div className="wrapper">
          <div className="videography__title ">Видеосъемка</div>
          <div className="videography__content">
            <h1>По вопросам видеосъемки обращаться к менеджеру</h1>
            <Link onClick={onScrollToApplication} className="button" to="/">
              Связаться
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videography;
