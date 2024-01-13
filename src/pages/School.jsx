import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Application from "../components/Application";
import SchoolPhotographyCard from "../components/School/SchoolCard";
import SchoolPhotographyCard2 from "../components/School/SchoolCard2";
import { fetchSchoolItems } from "../redux/slices/schoolItems";
import Loader from "../components/Loader";
import CarouselVid from "../components/CarouselVid";

const SchoolPhotography = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.school);

  console.log(items);

  useEffect(() => {
    dispatch(fetchSchoolItems());
  }, []);

  return (
    <div>
      {status === "loading" ? (
        <Loader />
      ) : (
        <div className="school main__fade">
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
