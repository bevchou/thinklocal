import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Group.scss";
// import data from "../data/dummyData.json";
import { slugify } from "../slugify";

const Group = (name) => {
  //need view for admin,/organizer
  let title = name.match.params.name;

  // let groupObj = data.groups.find((group) => slugify(group.title) === title);
  const [groupObj,setGroup] = useState([]);
  const [groupInitatives, setGroupInitatives] = useState([]);
  const [groupLoading, setGroupLoading] = useState(true);
  const [initativeLoading, setIntativeLoading] = useState(true);

  useEffect(() => {
    fetch('https://thinklocal-ec2-alb-2033741287.us-west-1.elb.amazonaws.com/api/groups/'+title+'/?format=json')
    .then(response => response.json())
    .then(data => {
      setGroup(data);
      setGroupLoading(false);
    })
    .catch(error => console.error(error));
  }, []);

  const options = {
    method: "POST",
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({'groupId': title})
  }
  useEffect(() => {
    fetch('https://thinklocal-ec2-alb-2033741287.us-west-1.elb.amazonaws.com/api/initiatives/getInitiatives/', options)
    .then(response => response.json())
    .then(data => {
      console.log("data",data);
      if(data.status === 'found'){
        setGroupInitatives(data.initiatives);
      }
      setIntativeLoading(false);
    })
    .catch(error => console.error(error));
  }, []);

  if( groupLoading === true || initativeLoading === true){
    return(<div>Loading</div>)
  }

  return (
    <div className="groupPage">
      <div className="groupSidebar">
        sidebar is here
      </div>
      <div className="group">
        <div className="title">{groupObj.group_name}</div>
        <div className="foundingDate">
          Group created on {new Date(Date.parse(groupObj.create_date)).toLocaleString()}
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
                slugify(groupObj.group_name) +
                "/" +
                slugify(initiative.fields.name)
              }
            >
              <div className="initativeImg">
                <img
                  // src={process.env.PUBLIC_URL + initiative.imgSrc}
                  src={"https://picsum.photos/800"}
                  alt="initative header"
                />
              </div>
              <div className="initiativeInfo">
                <div className="initiativeTitle">{initiative.fields.name}</div>
                  created on {new Date(Date.parse(initiative.fields.create_date)).toLocaleString()}
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