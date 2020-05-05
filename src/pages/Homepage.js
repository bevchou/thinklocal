import React from "react";
import "./Homepage.scss";
import data from '../data/dummyData.json';

import TileGroup from '../components/TileGroup';

const Homepage = ({ isLoggedIn }) => {
  return (
    <div className="homepage">
      <div className="intro">
        <h1>Engage with your community</h1>
        <p>
          Want to help but don’t know where to start? ThinkLocal is a platform that makes civic
          engagement easier. Organize or find existing organizations and causes
          in your community.
        </p>
        <button className="cta">Start helping</button>
      </div>
      <TileGroup groupName="Events" tileArray={data.events} />
      <TileGroup groupName="Groups" tileArray={data.groups} />
    </div>
  );
};

export default Homepage;
