import React from "react";
import Tile from "./Tile";
import "./TileGroup.scss";

const TileGroup = ({ groupName, tileArray }) => {
  return (
    <div className="tileGroup">
      <div className="tileGroupTitle">{groupName}</div>
      <div className="tiles">
        {tileArray.map((tile) => (
          <Tile
            title={tile.title}
            key={tile.title + tile.id}
            date={tile.date}
            imgSrc={tile.imgSrc}
            toUrl={tile.toUrl}
            eventId={tile.id}
          />
        ))}
      </div>
      <button className="showMoreButton">Show more</button>
    </div>
  );
};

export default TileGroup;
