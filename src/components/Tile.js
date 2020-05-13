import React from "react";

const Tile = ({ title, date, imgSrc, toUrl, eventId }) => {
  return (
    <a href={process.env.PUBLIC_URL + toUrl + "/" + eventId}>
      <div className="tile">
        <div className="tileImage">
          <img src={process.env.PUBLIC_URL + imgSrc} alt={title} />
        </div>
        <div className="tileText">
          <div className="tileTitle">{title}</div>
          <div className="tileDate">{date}</div>
        </div>
      </div>
    </a>
  );
};

export default Tile;
