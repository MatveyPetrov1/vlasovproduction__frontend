import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Application from "../components/UI/Application/index";
import { fetchPortpholioItems } from "../redux/slices/pages/portpholioItems";
import Loader from "../components/UI/Loader";
import PortpholioItem from "../components/Portpholio";
import { setCurrentPage } from "../redux/slices/components/headerSlice";
import MainCarousel from "../components/School/MainCarousel";

const PortpholioSchool = () => {
  const dispatch = useDispatch();
  const [isOpenCarousel, setIsOpenCarousel] = React.useState();
  const [topImageIsActive, setTopImageIsActive] = React.useState(false);
  const { items, status } = useSelector((state) => state.portpholio);

  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(fetchPortpholioItems());
  }, []);

  return (
    <>
      {status === "loading" ? (
        <Loader />
      ) : (
        <div className="portpholioitem main__fade">
          {/* Main carousel  */}

          {isOpenCarousel && (
            <MainCarousel
              bigSlider={items.school.bigSlider}
              onClickClose={() => setIsOpenCarousel(false)}
            />
          )}

          <div className="topimage load_animation">
            <img
              className={
                topImageIsActive
                  ? "topimage__image portpholio__bg__school active"
                  : "topimage__image portpholio__bg__school"
              }
              src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/P8BA/arYqUBfDA/dcac2b48-4b8a-0c2f-e448-7be30afc2821"
              alt=""
              onLoad={() => {
                setTopImageIsActive(true);
              }}
            />
          </div>

          {/* Portpholio items  */}

          <PortpholioItem
            {...items.school}
            onClickImage={() => setIsOpenCarousel(true)}
          />

          <Application />
        </div>
      )}
    </>
  );
};

export default PortpholioSchool;
