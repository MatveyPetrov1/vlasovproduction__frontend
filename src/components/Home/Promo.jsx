import React, { useState } from "react";
import logo from "../../assets/img/whitelogo.png";
import promo from "../../assets/img/promo__photo.jpg";

const Promo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="promo load_animation">
      <img
        className={isLoaded ? "promo__photo loaded" : "promo__photo"}
        src={promo}
        alt="promo__photo"
        onLoad={() => setIsLoaded(true)}
      />
      <div className={isLoaded ? "promo__gradient active" : "promo__gradient"}>
        <img src={logo} alt="promo__logo" />
      </div>
    </div>
  );
};

export default Promo;
