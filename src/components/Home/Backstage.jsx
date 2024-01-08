import CarouselVid from "../CarouselVid";
import CarouselPic from "../CarouselPic";

const Backstage = ({ sliderImages, sliderVideos }) => {
  return (
    <div className="backstage">
      <div className="backstage__title">Бэкстейдж</div>
      <CarouselVid sliderVideos={sliderVideos} />
      <CarouselPic sliderImages={sliderImages} />
    </div>
  );
};

export default Backstage;
