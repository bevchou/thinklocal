import React from "react";
import "./Group.scss";
import data from "../data/dummyData.json";
import { slugify } from "../slugify";

const Group = (name) => {
  //need view for admin/organizer
  let title = name.match.params.name;
  let groupObj = data.groups.find((group) => slugify(group.title) === title);

  return (
    <div className="page">
      <div className="group">
        <div className="title">{groupObj.title}</div>
        <div className="foundingDate">
          Group created on {groupObj.foundingDate}
        </div>
        <div className="aboutGroup">{groupObj.about}</div>
        {groupObj.initiatives.map((initiative) => (
          <div className="initiative" key={initiative.title}>
            <a
              href={
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
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Group;
