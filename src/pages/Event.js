import React, {useState, useEffect, useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../UserContext";

import "./Event.scss";
// import data from "../data/dummyData.json";
// import { slugify } from "../slugify";

const Event = (eventId) => {
  let id = parseInt(eventId.match.params.eventId);
  // let eventObj = data.events.find((event) => event.id === +id);
  const [eventObj, setEvent] = useState([]);
  const [eventLoading, setEventLoading] = useState(true);
  const [group, setGroup] = useState('');
  const [groupLoading, setGroupLoading] = useState(true);
  const [eventCreator, setEventCreator] = useState('');
  const [eventCreatorLoading, setEventCreatorLoading] = useState(true);
  const [attendee, setAttendee] = useState([]);
  const [attendeeLoading, setAttendeeLoading] = useState(true);

  const {isLoggedInState, user} = useContext(UserContext);
  const history = useHistory();

  const fetchAttendeeList = async () =>{
    const options = {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"eventId": id})
    }
    const attendeeCall = await fetch('http://localhost:8000/api/attendees/getAttendeeInfo/', options);
    //TODO: getting the whole list, need to improve this
    const attendeeList = await attendeeCall.json();
    setAttendee(attendeeList.users);
    setAttendeeLoading(false);
    console.log(attendee);
    console.log(attendeeList.users);
  }

  const fetchInfo = async () => {

    const apiCall = await fetch('http://localhost:8000/api/events/'+id);
    const event = await apiCall.json();
    const groupCall = await fetch('http://localhost:8000/api/groups/'+event.group);
    const group = await groupCall.json();
    const creatorCall = await fetch('http://localhost:8000/api/users/'+event.event_creator);
    const eventCreator = await creatorCall.json();

    fetchAttendeeList();

    setGroup(group);
    setGroupLoading(false);

    setEvent(event);
    setEventLoading(false);

    setEventCreator(eventCreator);
    setEventCreatorLoading(false);
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  if( eventLoading === true || groupLoading === true 
    || eventCreatorLoading === true || attendeeLoading === true){
    return(<div>Loading</div>)
  }

  const handleJoinEvent = async () => {
    if(isLoggedInState){
      // const userJson = JSON.parse(user);
      // const eventUserInfo = {
      //   "event": id,
      //   "user": userJson.pk
      // }
      const eventUserInfo = {
        "event": id,
        "user": user.id
      }
      console.log(eventUserInfo);
      await fetch("http://localhost:8000/api/attendees/",
      {
        method: "POST",
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(eventUserInfo),
      })
      .then((response) => {
        if(response.ok){
          return response.json();
        }else{
          throw new Error("something went wrong");
        }
      });
    }else{
      history.push("/Signin");
    }
    fetchAttendeeList();
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
            {group.group_name}
          </Link>
        </div>
        
        <div className="details">
          {" "}
          {eventObj.event_date} 
          {/* at {eventObj.location} */}
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
             {attendee.map((member, i) => {
              if (i < 3) {
                return (
                  <div className="member" key={member.id}>
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
          </div>
        </div>
        <div className="member">
          <div className="organizerImg"></div>
          {eventCreator.user_name} from {group.group_name}
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
