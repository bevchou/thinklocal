import React from "react";
import Tile from "./Tile";
import "./TileGroup.scss";

const TileGroup = ({ groupName, tileArray }) => {
  console.log(tileArray);
  return (
    <div className="tileGroup">
      <div className="tileGroupTitle">{groupName}</div>
      <div className="tiles">
        {tileArray.map((tile) => (
          <Tile title={tile.title} date={tile.date} imgSrc={tile.imgSrc} />
        ))}
      </div>
    </div>
  );
};

export default TileGroup;
