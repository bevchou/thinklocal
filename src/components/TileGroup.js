import React from "react";
import Tile from "./Tile";
import GroupTile from "./GroupTile";
import "./TileGroup.scss";

const TileGroup = ({ groupName, tileArray }) => {
  const type = groupName.includes("Events") ? "events" : "groups";
  
  return (
    <div className="tileGroup">
      <div className="tileGroupTitle">{groupName}</div>
      <div className="tiles">
        { type === "events" && 
          tileArray.map((tile) => 
            <Tile
            title={tile.event_title}
            key={tile.event_title + tile.id}
            date={tile.event_date}
            imgSrc= {"https://picsum.photos/200"}
            toUrl={"/event"}
            eventId={tile.id}
          />)
        }
        { type === "groups" && 
          tileArray.map((tile) => 
            <GroupTile
            title={tile.group_name}
            key={tile.group_name + tile.id}
            imgSrc= {"https://picsum.photos/200"}
            toUrl={"/group"}
            groupId={tile.id}
          />)
        }
      </div>
      <button className="showMoreButton">Show more</button>
    </div>
  );
};

export default TileGroup;