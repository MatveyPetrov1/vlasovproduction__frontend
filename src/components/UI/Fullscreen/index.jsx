import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../../redux/slices/components/fullscreenSlice";
import styles from "./fullscreen.module.scss";

const Fullscreen = () => {
  const { currentImage, isOpen } = useSelector((state) => state.fullscreen);
  const dispatch = useDispatch();

  return (
    <div
      className={
        isOpen
          ? `${styles.fullscreen__photography} ${styles.fullscreen__photography__active}`
          : `${styles.fullscreen__photography}`
      }
    >
      {/* Image */}

      <img src={currentImage} alt="vlasov photo" />
      <div
        className={styles.fullscreen__photography__wrapper}
        onClick={() => dispatch(setIsOpen(false))}
      >
        {/* Close icon */}

        <svg
          onClick={() => dispatch(setIsOpen(false))}
          className="school__carousel__close_icon"
          viewBox="0 0 24 24"
          width="50px"
          height="50px"
          fill="#fff"
        >
          <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
        </svg>
      </div>
    </div>
  );
};

export default Fullscreen;
