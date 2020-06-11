import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Group.scss";
// import data from "../data/dummyData.json";
import { slugify } from "../slugify";

const Group = (name) => {
  //need view for admin/organizer
  let title = name.match.params.name;
  // let groupObj = data.groups.find((group) => slugify(group.title) === title);
  const [groupObj,setGroup] = useState([]);
  const [groupLoading, setGroupLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/groups/'+title+'/?format=json')
    .then(response => response.json())
    .then(data => {
      setGroup(data);
      setGroupLoading(false);
    })
    .catch(error => console.error(error));
  }, []);

  return (
    <div className="page">
      <div className="group">
        <div className="title">{groupObj.group_name}</div>
        <div className="foundingDate">
          Group created on {new Date(Date.parse(groupObj.create_date)).toLocaleString()}
        </div>
        
      </div>
    </div>
  );
};

export default Group;
{/* <div className="aboutGroup">{groupObj.about}</div> */}
        {/* {groupObj.initiatives.map((initiative) => (
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
        ))} */}