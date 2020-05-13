import React from "react";
import './Event.scss';
import data from "../data/dummyData.json";

const Event = (eventId) => {
  let id = eventId.match.params.eventId;
  console.log(id);
  let eventObj = data.events.find(event => event.id === +id);
  return (
    <div className="event">
      <div className="title">{eventObj.title}</div>
  <div className="community">by {eventObj.community}</div>
  <div className="details"> {eventObj.date} at {eventObj.location}</div>

  <button>Join</button>
  <button>Share</button>

  <img src={eventObj.imgSrc} />

  <div className="about">
    <h4>About the Event</h4>
    <p>{eventObj.about}</p>
  </div>

<div className="organizer">
{/* May need to have user ids, and then query them to get the image and names? */}
</div>

<div className="attending">
  <h4>Members Joined</h4>
{/* May need to have user ids, and then query them to get the image and names? */}
</div>

<button>Attend</button>
  
    </div>
  );
};

export default Event;
