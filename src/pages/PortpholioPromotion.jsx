import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Application from "../components/UI/Application/index";
import { fetchPortpholioItems } from "../redux/slices/pages/portpholioItems";
import Loader from "../components/UI/Loader";
import PortpholioItem from "../components/Portpholio/index";
import { setCurrentPage } from "../redux/slices/components/headerSlice";
import MainCarousel from "../components/School/MainCarousel";

const PromotionPortpholio = () => {
  const [isOpenCarousel, setIsOpenCarousel] = React.useState();
  const [topImageIsActive, setTopImageIsActive] = React.useState(false);
  const { items, status } = useSelector((state) => state.portpholio);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(fetchPortpholioItems());
  }, []);

  return (
    <>
      {status === "loading" ? (
        <Loader />
      ) : (
        // Main carousel

        <div className="portpholioitem main__fade">
          {isOpenCarousel && (
            <MainCarousel
              bigSlider={items.promotion.bigSlider}
              onClickClose={() => setIsOpenCarousel(false)}
            />
          )}

          {/* Topimage */}

          <div className="topimage load_animation">
            <img
              src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/P8BA/arYqUBfDA/5dd5e952-5357-a559-bc3f-fdf4c79c2821"
              alt=""
              className={
                topImageIsActive
                  ? "topimage__image portpholio__bg__promotion active"
                  : "topimage__image portpholio__bg__promotion"
              }
              onLoad={() => {
                setTopImageIsActive(true);
              }}
            />
          </div>

          <PortpholioItem
            {...items.promotion}
            onClickImage={() => setIsOpenCarousel(true)}
          />

          <Application />
        </div>
      )}
    </>
  );
};

export default PromotionPortpholio;
