import React from "react";
import arrow__down from "../assets/img/homepage__arrow__down.svg";
import arrow__up from "../assets/img/homepage__arrow__up.svg";

const Arrow = () => {
  const onScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="home__arrow__wrapper" onClick={onScrollTop}>
      {/* <img src={arrow__up} className="home__arrow__up" alt="" /> */}
      <svg
        fill="#fff"
        height="35px"
        width="35px"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 330 330"
        className="home__arrow__up"
      >
        <path
          id="XMLID_224_"
          d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
	l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
	C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
        />
      </svg>
    </div>
  );
};

export default Arrow;
