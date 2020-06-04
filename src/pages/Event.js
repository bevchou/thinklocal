import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import "./Event.scss";
// import data from "../data/dummyData.json";
import { slugify } from "../slugify";

const Event = (eventId) => {
  let id = eventId.match.params.eventId;
  // let eventObj = data.events.find((event) => event.id === +id);
  const [eventObj, setEvent] = useState([]);
  const [eventLoading, setEventLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/events/'+id)
    .then(response => response.json())
    .then(data => {
      setEvent(data);
      setEventLoading(false);
      console.log(data);
    })
    .catch(error => console.error(error));
  }, []);

  const handleJoinEvent = () => {
    console.log("you joined the event");
  };

  const handleShareEvent = () => {
    console.log("share options");
  };

  const handleShowMemberList = () => {
    console.log("modal to show member list");
  };


  
  return (
    <div className="page">
      <div className="event">
        <div className="title">{eventObj.event_title}</div>
        <div className="community">
          by{" "}
          {/* <Link to={"/group/" + slugify(eventObj.group)}> */}
          <Link to={"/group/"+ eventObj.group}>
            {eventObj.group}
          </Link>
        </div>
        ˘
        <div className="details">
          {" "}
          {eventObj.event_date} at {eventObj.location}
        </div>
        <div className="callToAction">
          <button onClick={() => handleJoinEvent()}>Join</button>
          <button onClick={() => handleShareEvent()}>Share</button>
        </div>
        <div className="mainImage">
          <img
            // src={process.env.PUBLIC_URL + eventObj.imgSrc}
            src={"https://picsum.photos/800"}
            alt="event header"
          />
        </div>
        <div className="eventInfo">
          <div className="eventAbout">
            <h4>About the Event</h4>
            <p>{eventObj.event_description}</p>
          </div>
          <div className="attending">
            <h4>Members Joined</h4>
            {/* {eventObj.memberIds.map((member, i) => {
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
            })} */}
            {/* May need to have user ids, and then query them to get the image and names? */}
          </div>
        </div>
        <div className="member">
          <div className="organizerImg"></div>
          {eventObj.event_creator} from {eventObj.group}
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
