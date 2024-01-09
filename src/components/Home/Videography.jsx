import React from "react";
import { Link } from "react-router-dom";

const Videography = () => {
  return (
    <div className="videography">
      <div className="container">
        <div className="wrapper">
          <div className="videography__title ">Видеосъемка</div>
          <div className="videography__content">
            <h1>По вопросам видеосъемки обращаться к менеджеру</h1>
            <Link className="button" to="/">
              Связаться
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videography;
