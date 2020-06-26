import React from "react";

import "./Modals.scss";

const JoinModal = ({ setModalState }) => {
  const addToCal = () => {
    console.log("add to calendar");
  };

  return (
    <div className="modal">
      {/* set modal to null to close out of it */}
      <div className="exitModal" onClick={() => setModalState(null)}>
        X
      </div>

      <h2>Thanks for signing up!</h2>

      <div className="buttonPair">
      <button onClick={() => addToCal()}>Add to calendar</button>
      <button onClick={() => setModalState("share")}>Share with friends</button>
      </div>
    </div>
  );
};

export default JoinModal;
