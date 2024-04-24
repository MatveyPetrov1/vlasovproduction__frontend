import React from "react";
import app_styles from "../../UI/Application/application.module.scss";
import { useDispatch } from "react-redux";
import Application from "../Application/index";

export const ApplicationWindow = ({ setApplicationIsOpen, isOpen }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={
        isOpen
          ? `${app_styles.application__window} ${app_styles.application__window__active}`
          : `${app_styles.application__window}`
      }
    >
      <div
        className={app_styles.application__fullscreen}
        onClick={() => {
          dispatch(setApplicationIsOpen(false));
        }}
      >
        <svg
          onClick={() => {
            dispatch(setApplicationIsOpen(false));
          }}
          className="school__carousel__close_icon"
          viewBox="0 0 24 24"
          width="50px"
          height="50px"
          fill="#fff"
        >
          <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
        </svg>
      </div>

      <div className={app_styles.application__fullscreen__block}>
        <Application isWindow={true} />
      </div>
    </div>
  );
};
