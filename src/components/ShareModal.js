import React from "react";
import "./Modals.scss";

const ShareModal = ({ linksToShare, setModalState }) => {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className="modal">
      {/* set modal to null to close out of it */}
      <div className="exitModal" onClick={() => setModalState(null)}>
        X
      </div>
      <h2>Share this event!</h2>
      <div className="shareButtons">
        {linksToShare && linksToShare.length > 0
          ? linksToShare.map((link) => (
              <button key={link.name} onClick={() => openLink(link.url)}>
                {link.name}
              </button>
            ))
          : "The organizer of this event has not added any links yet ):"}
      </div>
    </div>
  );
};

export default ShareModal;
