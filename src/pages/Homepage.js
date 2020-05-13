import React from "react";
import "./Homepage.scss";
import data from "../data/dummyData.json";

import TileGroup from "../components/TileGroup";

const Homepage = ({ isLoggedInState, zipcodeState, setZipcodeState }) => {
  let zipcodeInput;
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

  const requestUrl =
    "http://ec2-54-193-65-86.us-west-1.compute.amazonaws.com:8000/api/events?format=json";
  fetch(requestUrl, {
    // method: "GET",
    mode: "no-cors",
    // headers: {
    //   "Content-Type": "application/json",
    // }
  })
    .then((response) => {
      console.log("Success:", response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return (
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
        groupName={(zipcodeState || isLoggedInState ? "Local " : "") + "Events"}
        tileArray={data.events}
      />
      <TileGroup
        groupName={(zipcodeState || isLoggedInState ? "Local " : "") + "Groups"}
        tileArray={data.groups}
      />
    </div>
  );
};

export default Homepage;
