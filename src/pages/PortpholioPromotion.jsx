import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Application from "../components/Application";
import { fetchPortpholioItems } from "../redux/slices/portpholioItems";
import Loader from "../components/Loader";

const PromotionPortpholio = () => {
  const { items, status } = useSelector((state) => state.portpholio);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPortpholioItems());
  }, []);

  return (
    <>
      {status === "loading" ? (
        <Loader />
      ) : (
        <div className="portpholioitem main__fade">
          <div className="topimage"></div>
          <div className="container">
            <div className="wrapper">
              <div className="portpholioitem__title">Рекламная фотография </div>
              {items.promotion.map((obj, index) => {
                return index === 0 || index % 2 === 0 ? (
                  <div
                    key={index}
                    className="portpholioitem__block portpholioitem__block1"
                  >
                    <img src={obj.url1} alt="" />
                    <img src={obj.url2} alt="" />
                    <img src={obj.url3} alt="" />
                  </div>
                ) : (
                  <div
                    key={index}
                    className="portpholioitem__block portpholioitem__block2"
                  >
                    <img src={obj.url1} alt="" />
                    <img src={obj.url2} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <Application />
        </div>
      )}
    </>
  );
};

export default PromotionPortpholio;
