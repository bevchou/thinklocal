import React, {useState, useEffect} from "react";

import "./Homepage.scss";
// import data from "../data/dummyData.json";

import TileGroup from "../components/TileGroup";

const Homepage = ({ isLoggedInState, zipcodeState, setZipcodeState }) => {
  let zipcodeInput;
  const [events, setEvents] = useState([]);
  const [groups, setGroups] = useState([]);
  const [groupsLoading, setGroupsLoading] = useState(true);
  const [eventsLoading, setEventsLoading] = useState(true);

  const fetchEvents = async () => {
    const apiCall = await fetch('http://localhost:8000/api/events?format=json');
    const events = await apiCall.json();
    setEvents(events);
    setEventsLoading(false);
    console.log(events);
  }
  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/api/groups?format=json')
    .then(response => response.json())
    .then(data => {
      setGroups(data);
      setGroupsLoading(false);
    })
    .catch(error => console.log(error));
  }, []);
  
  const getZipcodeInput = (e) => {
    zipcodeInput = e.target.value;
    console.log(zipcodeInput);
  };
  const submitZipcode = () => {
    if (
      zipcodeInput !== null &&
      zipcodeInput !== undefined &&
      zipcodeInput !== ""
    ) {
      if (zipcodeInput.length === 5 && +zipcodeInput < 99999) {
        setZipcodeState(zipcodeInput);
      }
    } else {
      console.log("not a valid zipcode");
    }
  };

  if( eventsLoading === true || groupsLoading === true){
    return(<div>Loading</div>)
  }

  return (
    <div className="page">
      <div className="homepage">
        <div className="intro">
          <h1>Engage with your community</h1>
          <p>
            Want to help but don’t know where to start? ThinkLocal is a platform
            that makes civic engagement easier. Organize or find existing
            organizations and causes in your community.
          </p>
          {zipcodeState || isLoggedInState ? (
            <div />
          ) : (
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Enter your zipcode"
                  size={18}
                  minLength={5}
                  maxLength={5}
                  onChange={(e) => getZipcodeInput(e)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      submitZipcode();
                    }
                  }}
                />
              </div>
              <button className="cta" onClick={() => submitZipcode()}>
                Start helping
              </button>
            </div>
          )}
        </div>
        <TileGroup
          groupName={
            (zipcodeState || isLoggedInState ? "Local " : "") + "Events"
          }
          tileArray={events}
        />
        <TileGroup
          groupName={
            (zipcodeState || isLoggedInState ? "Local " : "") + "Groups"
          }
          tileArray={groups}
        />
      </div>
    </div>
  );
};

export default Homepage;
