import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import telegram from "../assets/img/telegram.svg";
import whatsup from "../assets/img/whatsup.svg";
import { Link } from "react-router-dom";
import { setName, setPhone, setText } from "../redux/slices/applicationSlice";

const Application = () => {
  const applicationRef = useRef();
  const dispatch = useDispatch();

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [textError, setTextError] = useState(false);
  const [isSend, setIsSend] = useState(false);

  const { name, phone, text, city } = useSelector((state) => state.application);

  const sendApplication = async () => {
    const { data } = await axios.post("http://localhost:4444/application", {
      name,
      phone,
      text,
      city,
    });
    if (data.message === "success") {
      setIsSend(true);
      dispatch(setName(""));
      dispatch(setPhone(""));
      dispatch(setText(""));
    } else {
      const errors = data.map((obj) => obj.msg);
      for (let value of errors) {
        if (value === "Неверный формат имени") {
          setNameError(true);
        } else if (value === "Неверный формат телефона") {
          setPhoneError(true);
        } else if (value === "Неверный формат записи") {
          setTextError(true);
        }
      }
    }
  };

  return (
    <div className="application" ref={applicationRef}>
      <div className="application__container">
        <div className="wrapper">
          <div className="application__wrapper">
            <div className="application__left">
              <h1>Оставить заявку</h1>
              <div className="application__name_input">
                <input
                  type="text"
                  placeholder="Имя"
                  value={name}
                  onChange={(e) => {
                    dispatch(setName(e.target.value));
                    setNameError(false);
                  }}
                ></input>
                {nameError ? (
                  <p className="application__name_error">
                    Неверный формат имени
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="application__phone_input">
                <input
                  type="text"
                  placeholder="Номер телефона"
                  value={phone}
                  onChange={(e) => {
                    dispatch(setPhone(e.target.value));
                    setPhoneError(false);
                  }}
                />
                {phoneError ? (
                  <p className="application__phone_error ">
                    Неверный формат телефона
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="application__text_input">
                <input
                  type="text"
                  placeholder="Какая услуга интересует"
                  value={text}
                  onChange={(e) => {
                    dispatch(setText(e.target.value));
                    setTextError(false);
                  }}
                />
                {textError ? (
                  <p className="application__text_error">
                    Неверный формат обращения
                  </p>
                ) : (
                  ""
                )}
              </div>
              {isSend ? (
                <div className="application__left__success">
                  <div className="application__left__success__top">
                    <p className="application__left__success__text">
                      Успешно! Ваша заявка отправлена и будет рассмотрена в
                      самое ближайшее время!
                    </p>
                  </div>
                  <Link
                    onClick={() => setIsSend(false)}
                    className="application__left__success_button"
                  >
                    Отправить еще
                  </Link>
                </div>
              ) : (
                <div className="application__send_button">
                  <Link onClick={sendApplication}>Отправить</Link>
                </div>
              )}
            </div>
            <div className="application__right">
              <h1>Контакты</h1>
              <div className="application__telegram">
                <img src={telegram} alt="" />
                <p>VLASOV_production</p>
              </div>
              <div className="application__whatsup">
                <img src={whatsup} alt="" />
                <p>+79110350683</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
