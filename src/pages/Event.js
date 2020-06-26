import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Event.scss";
import data from "../data/dummyData.json";
import { slugify } from "../slugify";

import ShareModal from "../components/ShareModal";
import JoinModal from "../components/JoinModal";

const Event = (eventId) => {
  let id = eventId.match.params.eventId;
  let eventObj = data.events.find((event) => event.id === +id);
  const [modalState, setModalState] = useState(null);
  // const [modalState, setModalState] = useState("share");

  const handleJoinEvent = () => {
    console.log("you joined the event");
    setModalState("join");
  };

  const handleShareEvent = () => {
    console.log("share options");
    setModalState("share");
  };

  const handleShowMemberList = () => {
    console.log("modal to show member list");
  };

  return (
    <div className="page">
      {modalState === "share" ? <ShareModal linksToShare={eventObj.shareLinks} setModalState={setModalState}/> : null}
      {modalState === "join" ? <JoinModal setModalState={setModalState}/> : null}

      <div className="event">
        <div className="title">{eventObj.title}</div>
        <div className="community">
          by{" "}
          <Link to={"/group/" + slugify(eventObj.community)}>
            {eventObj.community}
          </Link>
        </div>
        <div className="details">
          {" "}
          {eventObj.date} at {eventObj.location}
        </div>
        <div className="callToAction">
          <button onClick={() => handleJoinEvent()}>Join</button>
          <button onClick={() => handleShareEvent()}>Share</button>
        </div>
        <div className="mainImage">
          <img
            src={process.env.PUBLIC_URL + eventObj.imgSrc}
            alt="event header"
          />
        </div>
        <div className="eventInfo">
          <div className="eventAbout">
            <h4>About the Event</h4>
            <p>{eventObj.about}</p>
          </div>
          <div className="attending">
            <h4>Members Joined</h4>
            {eventObj.memberIds.map((member, i) => {
              if (i < 3) {
                return (
                  <div className="member" key={member}>
                    <div className="memberImg"></div>
                    {member}
                  </div>
                );
              } else if (i === 3) {
                return (
                  <div
                    className="showMemberList"
                    key="showMemberList"
                    onClick={() => handleShowMemberList()}
                  >
                    + {eventObj.memberIds.length - 3} others
                  </div>
                );
              } else {
                return null;
              }
            })}
            {/* May need to have user ids, and then query them to get the image and names? */}
          </div>
        </div>
        <div className="member">
          <div className="organizerImg"></div>
          {eventObj.organizer} from {eventObj.community}
        </div>
        {/* May need to have user ids, and then query them to get the image and names? */}
        <div className="callToAction">
          <button onClick={() => handleJoinEvent()}>Attend</button>
        </div>
      </div>
    </div>
  );
};

export default Event;
