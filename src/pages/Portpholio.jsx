import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Application from "../components/Application";
import PortpholioItem from "../components/Portpholio/PortpholioItem";
import Header from "../components/Header";
import { fetchPortpholioItems } from "../redux/slices/portpholioItems";
import Loader from "../components/Loader";
import WOW from "wow.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Portpholio = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.portpholio);
  const { applicationOffset } = useSelector((state) => state.offset);

  const wow = new WOW();
  wow.init();

  useEffect(() => {
    dispatch(fetchPortpholioItems());
  }, []);

  const onScrollTo = (component) => {
    if (component === applicationOffset) {
      window.scrollTo({
        top: component,
        behavior: "smooth",
      });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {status === "loading" ? (
        <Loader />
      ) : (
        <div className="portpholio wow animate__animated animate__fadeIn">
          {/* <Header onScrollTo={onScrollTo} /> */}
          <div className="topimage"></div>
          <div className="container">
            <div className="wrapper">
              <div className="portpholio__title">Портфолио</div>
              <div className="portpholio__cards">
                {items.cards.map((obj, index) => {
                  return <PortpholioItem key={index} {...obj} />;
                })}
              </div>
            </div>
          </div>
          <Application />
        </div>
      )}
    </>
  );
};

export default Portpholio;
