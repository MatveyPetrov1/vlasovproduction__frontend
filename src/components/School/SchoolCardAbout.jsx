import React from "react";

const SchoolCardAbout = ({ blackfat, blacksimple, fat, simple }) => {
  return (
    <li className="school__card__right__about__item">
      <div className="school__card__right__about__item__black">
        <span>{blackfat}</span>
        <p>{blacksimple}</p>
      </div>
      <span>{fat}</span>
      <p>{simple}</p>
    </li>
  );
};

export default SchoolCardAbout;
