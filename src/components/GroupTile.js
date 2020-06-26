import React from "react";
import { Link } from "react-router-dom";


const GroupTile = ({ title, imgSrc, toUrl, groupId }) => {
  return (
    <Link to={ (toUrl ? toUrl : "") + "/" + (groupId ? groupId : "") }>
      <div className="tile">
        <div className="tileImage">
          {/* <img src={process.env.PUBLIC_URL + imgSrc} alt={title} /> */}
          <img src={imgSrc} alt={title} />
        </div>
        <div className="tileText">
          <div className="tileTitle">{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default GroupTile;
