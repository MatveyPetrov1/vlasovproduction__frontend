import React from "react";

const SchoolCardDesc = ({ blackfat, blacksimple, fat, simple }) => {
  return (
    <li>
      <div className="school__card__right__about__item__black">
        <span>{blackfat}</span>
        <p>{blacksimple}</p>
      </div>
      <span>{fat}</span>
      {simple}
    </li>
  );
};

export default SchoolCardDesc;
