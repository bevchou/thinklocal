import React from "react";
import "./Event.scss";
import data from "../data/dummyData.json";

const Event = (eventId) => {
  let id = eventId.match.params.eventId;
  console.log(id);
  let eventObj = data.events.find((event) => event.id === +id);
  return (
    <div className="page">
      <div className="event">
        <div className="title">{eventObj.title}</div>
        <div className="community">
          by <b>{eventObj.community}</b>
        </div>
        <div className="details">
          {" "}
          {eventObj.date} at {eventObj.location}
        </div>

        <div className="callToAction">
          <button>Join</button>
          <button>Share</button>
        </div>

        <div className="mainImage">
          <img src={eventObj.imgSrc} alt="event header" />
        </div>

        <div className="eventInfo">
          <div className="eventAbout">
            <h4>About the Event</h4>
            <p>{eventObj.about}</p>
          </div>
          <div className="attending">
            <h4>Members Joined</h4>
            {eventObj.memberIds.map((member) => (
              <div className="member">
                <div className="memberImg"></div>
                {member}
              </div>
            ))}
            {/* May need to have user ids, and then query them to get the image and names? */}
          </div>
        </div>

        <div className="member">
          <div className="organizerImg"></div>
          {eventObj.organizer} from {eventObj.community}
        </div>
        {/* May need to have user ids, and then query them to get the image and names? */}

        <div className="callToAction">
          <button>Attend</button>
        </div>
      </div>
    </div>
  );
};

export default Event;
