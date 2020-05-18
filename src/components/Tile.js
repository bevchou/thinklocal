import React from "react";
import { Link } from "react-router-dom";


const Tile = ({ title, date, imgSrc, toUrl, eventId }) => {
  return (
    <Link to={ (toUrl ? toUrl : "") + "/" + (eventId ? eventId : "") }>
      <div className="tile">
        <div className="tileImage">
          <img src={process.env.PUBLIC_URL + imgSrc} alt={title} />
        </div>
        <div className="tileText">
          <div className="tileTitle">{title}</div>
          <div className="tileDate">{date}</div>
        </div>
      </div>
    </Link>
  );
};

export default Tile;
