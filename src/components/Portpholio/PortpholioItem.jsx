import React from "react";
import { Link } from "react-router-dom";

const PortpholioPageItem = ({ url, title, imageUrl }) => {
  return (
    <div className="portpholio__card">
      <Link to={url}>
        <img src={imageUrl} alt="" />
        <p>{title} </p>
      </Link>
    </div>
  );
};

export default PortpholioPageItem;
