import React from "react";

const Tile = ({ title, date, imgSrc, toUrl }) => {
  return (
    <a href={process.env.PUBLIC_URL + "/group/" + toUrl}>
      <div className="tile">
        <div className="tileImage">
          <img src={process.env.PUBLIC_URL + imgSrc} />
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
