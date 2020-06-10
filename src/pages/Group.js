import React from "react";
import { Link } from "react-router-dom";

import "./Group.scss";
import data from "../data/dummyData.json";
import { slugify } from "../slugify";

const Group = (name) => {
  //need view for admin/organizer
  let title = name.match.params.name;
  let groupObj = data.groups.find((group) => slugify(group.title) === title);

  return (
    <div className="groupPage">
      <div className="groupSidebar">
        sidebar is here
      </div>
      <div className="group">
        <div className="title">{groupObj.title}</div>
        <div className="foundingDate">
          Group created on {groupObj.foundingDate}
        </div>
        <div className="aboutGroup">{groupObj.about}</div>

        <div className="alertBox">
          <div className="alertTitle">Alert!</div>
          {groupObj.alert}
        </div>

        {groupObj.initiatives.map((initiative) => (
          <div className="initiative" key={initiative.title}>
            <Link
              to={
                "/group/" +
                slugify(groupObj.title) +
                "/" +
                slugify(initiative.title)
              }
            >
              <div className="initativeImg">
                <img
                  src={process.env.PUBLIC_URL + initiative.imgSrc}
                  alt="initative header"
                />
              </div>
              <div className="initiativeInfo">
                <div className="initiativeTitle">{initiative.title}</div>
                {initiative.blurb}
              </div>
            </Link>
          </div>
        ))}

        <div className="additionalInfoBoxes">
          <div className="topNeeds">
            <div className="topNeedsTitle">Top Needs</div>
            <ul>
              {groupObj.topNeeds.map((need) => (
                <li key={need}>{need}</li>
              ))}
            </ul>
          </div>
          <div className="getStarted" onClick={() => window.open(groupObj.linkToCommunityGuidelines)}>
            <div className="getStartedTitle">How to get started</div>
            Community guidelines and onboarding
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default Group;
