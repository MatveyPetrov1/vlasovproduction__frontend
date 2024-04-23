import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Application from "../components/UI/Application/index";
import SchoolCard from "../components/School/SchoolCard";
import Loader from "../components/UI/Loader";
import { fetchSchoolItems } from "../redux/slices/pages/schoolItems";
import { setCurrentPage } from "../redux/slices/components/headerSlice";
import WOW from "wowjs";
import pdf from "../assets/img/VlasovProduction_compressed.pdf";

const SchoolPhotography = () => {
  new WOW.WOW().init();

  const dispatch = useDispatch();

  const { items, status } = useSelector((state) => state.school);

  const [topimageIsLoaded, setTopimageIsLoaded] = useState(false);

  const [quintupleImage, setQuintupleImage] = useState(false);
  const [tripleImage, setTripleImage] = useState(false);
  const [quarterImage, setQuarterImage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const schoolRef = React.useRef();

  useEffect(() => {
    dispatch(fetchSchoolItems());
    dispatch(setCurrentPage(2));

    if (schoolRef.current.offsetWidth > 1350) {
      setTripleImage(false);
      setQuarterImage(false);
      setQuintupleImage(true);
    }
    if (
      schoolRef.current.offsetWidth <= 1350 &&
      schoolRef.current.offsetWidth > 580
    ) {
      setTripleImage(false);
      setQuarterImage(true);
      setQuintupleImage(false);
    }

    if (schoolRef.current.offsetWidth <= 580) {
      setTripleImage(true);
      setQuarterImage(false);
      setQuintupleImage(false);
    }

    if (schoolRef.current.offsetWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    const imageCount = () => {
      if (schoolRef.current.offsetWidth > 1350) {
        setTripleImage(false);
        setQuarterImage(false);
        setQuintupleImage(true);
      }
      if (
        schoolRef.current.offsetWidth <= 1350 &&
        schoolRef.current.offsetWidth > 580
      ) {
        setTripleImage(false);
        setQuarterImage(true);
        setQuintupleImage(false);
      }
      if (schoolRef.current.offsetWidth <= 580) {
        setTripleImage(true);
        setQuarterImage(false);
        setQuintupleImage(false);
      }
      if (schoolRef.current.offsetWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", imageCount);

    return () => {
      window.removeEventListener("resize", imageCount);
    };
  }, []);

  return (
    <div>
      <div className="school__fullwidth" ref={schoolRef}></div>
      {status === "loading" ? (
        <Loader />
      ) : (
        <div className="school main__fade">
          <div className="topimage load_animation">
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
