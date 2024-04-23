import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentImage } from "../../redux/slices/components/bigSliderSlice";

const PortpholioItem = ({
  name,
  title,
  top,
  bottom,
  secondTitle,
  onClickImage,
}) => {
  const dispatch = useDispatch();

  const onClickOpenCarousel = (index) => {
    dispatch(setCurrentImage(index));
    onClickImage();
  };

  return (
    <div className="portpholio_item__white">
      <div className="portpholio_item">
        <div className="portpholio__container">
          <div className="portpholio_item__title">{name} </div>
          <div className="portpholio_item__block__title">
            <h1>{title}</h1>
          </div>
          {/* Top images */}
          {top.map((obj, index) => {
            return (
              <div
                key={index}
                className="portpholio_item__block portpholio_item__block1"
              >
                <div
                  style={{ backgroundImage: `url("${obj.item1.url}")` }}
                  onClick={() => onClickOpenCarousel(obj.item1.index)}
                  alt=""
                ></div>

                <div
                  style={{ backgroundImage: `url("${obj.item2.url}")` }}
                  onClick={() => onClickOpenCarousel(obj.item2.index)}
                  alt=""
                ></div>

                <div
                  style={{ backgroundImage: `url("${obj.item3.url}")` }}
                  onClick={() => onClickOpenCarousel(obj.item3.index)}
                  alt=""
                ></div>
              </div>
            );
          })}
          <div className="portpholio_item__block__title">
            <h1>{secondTitle}</h1>
          </div>
          {/* Bottom images  */}
          {bottom.map((obj, index) => {
            return (
              <div
                key={index}
                className="portpholio_item__block portpholio_item__block2"
              >
                <div
                  src={obj.url1}
                  style={{ backgroundImage: `url("${obj.item1.url}")` }}
                  onClick={() => onClickOpenCarousel(obj.item1.index)}
                  alt=""
                ></div>
                <div
                  src={obj.url2}
                  style={{ backgroundImage: `url("${obj.item2.url}")` }}
                  onClick={() => onClickOpenCarousel(obj.item2.index)}
                  alt=""
                ></div>
                <div
                  src={obj.url3}
                  style={{ backgroundImage: `url("${obj.item3.url}")` }}
                  onClick={() => onClickOpenCarousel(obj.item3.index)}
                  alt=""
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortpholioItem;
