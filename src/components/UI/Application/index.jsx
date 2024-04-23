import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../axios";
import telegram from "../../../assets/img/application__telegram.svg";
import whatsup from "../../../assets/img/application__whatsup.svg";
import vk from "../../../assets/img/application__vk.svg";
import {
  setName,
  setPhone,
  setText,
} from "../../../redux/slices/components/applicationSlice";
import { setIsOpenCities } from "../../../redux/slices/components/applicationSlice";
import ApplicationLeft from "./ApplicationLeft";
import styles from "./application.module.scss";

const Application = ({ isWindow }) => {
  const applicationRef = useRef();
  const dispatch = useDispatch();

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [textError, setTextError] = useState(false);
  const [isSend, setIsSend] = useState(false);

  const { name, phone, text, city, isOpen } = useSelector(
    (state) => state.application
  );

  // Sended application function

  const sendApplication = async () => {
    const { data } = await axios.post("/application", {
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
    } else if (data.message === "error") {
      dispatch(setIsOpenCities(true));
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

  const onChangeInputValueName = (e) => {
    dispatch(setName(e.target.value));
    setNameError(false);
  };

  const onChangeInputValueText = (e) => {
    dispatch(setText(e.target.value));
    setTextError(false);
  };

  const onChangeInputValuePhone = (e) => {
    dispatch(setPhone(e.target.value));
    setPhoneError(false);
  };

  const allUserData = {
    name,
    phone,
    text,
    nameError,
    phoneError,
    textError,
    isSend,
  };

  return (
    <div
      className={
        !isWindow
          ? `${styles.application} ${styles.application__active}`
          : isOpen
          ? `${styles.application} ${styles.application__active}`
          : `${styles.application}`
      }
      ref={applicationRef}
    >
      <div className={styles.application__container}>
        <div className="wrapper">
          {/* Check application is open  */}

          <div
            className={
              isWindow
                ? `${styles.application__wrapper} ${styles.application__window__wrapper}`
                : `${styles.application__wrapper}`
            }
          >
            {/* Application left  */}

            <ApplicationLeft
              onChangeInputValueName={onChangeInputValueName}
              onChangeInputValueText={onChangeInputValueText}
              onChangeInputValuePhone={onChangeInputValuePhone}
              sendApplication={sendApplication}
              setIsSend={setIsSend}
              {...allUserData}
            />

            {/* Application right */}

            <div className={styles.application__right}>
              <div className={styles.application__right__wrapper}>
                <div className={styles.application__right__wrapper__left}>
                  <h1 className={styles.application__right__title}>Контакты</h1>
                  <div className={styles.application__right__bottom}>
                    <a
                      className={styles.application__right__link}
                      href="https://t.me/VLASOV_production"
                    >
                      <img src={telegram} alt="" />
                      <p>VLASOV_production</p>
                    </a>
                    <a
                      href="https://wa.me/79110350683"
                      className={styles.application__right__link}
                    >
                      <img src={whatsup} alt="" />
                      <p>+79110350683</p>
                    </a>
                    <a
                      className={styles.application__right__link}
                      href="https://vk.com/vlasov.schoolalbums"
                    >
                      <img
                        className={styles.application__right__link__vkimage}
                        src={vk}
                        alt=""
                      />
                      <p>vlasov.schoolalbums</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
