import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Application from "../components/Application";
import SchoolPhotographyCard from "../components/School/SchoolCard";
import SchoolPhotographyCard2 from "../components/School/SchoolCard2";
import { fetchSchoolItems } from "../redux/slices/schoolItems";
import Header from "../components/Header";
import Loader from "../components/Loader";
import CarouselVid from "../components/CarouselVid";

const SchoolPhotography = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.school);
  const { applicationOffset } = useSelector((state) => state.offset);

  useEffect(() => {
    dispatch(fetchSchoolItems());
  }, []);

  const onScrollTo = (component) => {
    if (component === applicationOffset) {
      window.scrollTo({
        top: component,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {status === "loading" ? (
        <Loader />
      ) : (
        <div className="school wow animate__animated animate__fadeIn">
          {/* <Header onScrollTo={onScrollTo} /> */}
          <div className="topimage"></div>
          <div className="container">
            <div className="school__wrapper">
              {items.cards.map((obj, index) => {
                return index === 0 || index % 2 === 0 ? (
                  <SchoolPhotographyCard key={index} {...obj} />
                ) : (
                  <SchoolPhotographyCard2 key={index} {...obj} />
                );
              })}
              <h1 className="school__title">Что говорят о нас</h1>
            </div>
          </div>
          <CarouselVid sliderVideos={items.videos} />
          <Application />
        </div>
      )}
    </div>
  );
};

export default SchoolPhotography;
