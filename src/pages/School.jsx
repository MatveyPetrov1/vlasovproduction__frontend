import React from "react";
import { useSelector } from "react-redux";
import Application from "../components/UI/Application/index";
import SchoolCard from "../components/School/SchoolCard";
import Loader from "../components/UI/Loader";
import WOW from "wowjs";
import pdf from "../assets/img/VlasovProduction_compressed.pdf";
import { useLoading } from "../hooks/useLoading";

const SchoolPhotography = () => {
  new WOW.WOW().init();

  const { items, status } = useSelector((state) => state.school);

  const [topimageIsLoaded, setTopimageIsLoaded] = React.useState(false);

  const schoolRef = React.useRef();

  const { quintupleImage, tripleImage, quarterImage, isMobile } =
    useLoading(schoolRef);

  return (
    <div>
      <div className="school__fullwidth" ref={schoolRef}></div>
      {status === "loading" ? (
        <Loader />
      ) : (
        <div className="school main__fade">
          <div className="topimage load_animation">
            <div className="spin__loader"></div>
            <img
              src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/P8BA/arYqUBfDA/a704b944-bae9-b70c-c369-872a14ed2821"
              alt=""
              className={
                topimageIsLoaded
                  ? "topimage__image school__bg active"
                  : "topimage__image school__bg"
              }
              onLoad={() => setTopimageIsLoaded(true)}
            />
          </div>

          <div className="school__white_bg">
            <div className="school__background">
              <div className="container">
                <div className="school__wrapper">
                  {/* School cards  */}

                  {items.cards.map((obj, index) => {
                    return (
                      <SchoolCard
                        key={index}
                        {...obj}
                        tripleImage={tripleImage}
                        quarterImage={quarterImage}
                        quintupleImage={quintupleImage}
                        isMobile={isMobile}
                        firstCard={
                          index === 0 || index % 2 === 0 ? true : false
                        }
                      />
                    );
                  })}

                  {/* Business card */}

                  <div className="school__business_card">
                    <h1 className="school__button__text">
                      Лень долго объяснять одноклассникам почему именно мы?
                      Просто отправь нашу интерактивную визитку🔥👇
                    </h1>

                    <div className="school__button">
                      <a href={pdf} download="VlasovProduction.pdf">
                        Скачать визитку
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Application />
        </div>
      )}
    </div>
  );
};

export default SchoolPhotography;
