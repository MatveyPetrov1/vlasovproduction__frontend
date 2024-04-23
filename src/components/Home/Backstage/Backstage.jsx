import React from "react";
import CarouselVid from "../../UI/CarouselVid";
import BackstageMobileVideo from "../Backstage/BackstageMobileVideo";

const Backstage = ({ sliderVideos, mobileSliderVideos, isMobileAnimation }) => {
  const backstageRef = React.useRef();

  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    if (backstageRef.current.offsetWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    const resizeHandler = () => {
      if (backstageRef.current.offsetWidth <= 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {sliderVideos && mobileSliderVideos && (
        <div className="backstage" ref={backstageRef}>
          <div className="backstage__title">Бэкстейдж</div>
          {isMobile ? (
            <div className="backstage__items">
              {mobileSliderVideos.map((src, index) => {
                return <BackstageMobileVideo source={src} key={index} />;
              })}
            </div>
          ) : (
            <CarouselVid
              sliderVideos={sliderVideos}
              isMobileAnimation={isMobileAnimation}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Backstage;
