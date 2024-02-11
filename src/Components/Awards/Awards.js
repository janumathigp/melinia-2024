// Awards.js

import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./Awards.css"; // Import the CSS file with styles

const Awards = ({ isAward, onClose, updateIsAward, showAwardsInfo }) => {
  const handleClose = () => {
    onClose(); // Close the modal
    updateIsAward(false); // Emit event to update isAward to false
  };

  return (
    <Modal show={isAward} onHide={handleClose} style={{marginTop:'150px'}}>
<Modal.Header closeButton className="modal-content-custom1" 
>
  <Modal.Title>
    <div className="header-content" style={{
    display:"flex",
    flexDirection:"row",
    alignItems:"baseline",
    justifyContent:"space-between"
}}>
      <span className="meliniaFont" style={{paddingBottom:"0px"}}>Alert</span>
      <span className="bold-text" style={{fontSize:"25px",
      marginLeft:"50px"}}>Mr / Ms. Melinia</span>
    </div>
  </Modal.Title>
</Modal.Header>



      <Modal.Body className="modal-content-custom">
        <div className="container-fluid">
        <h4 style={{fontSize:'15px',fontFamily: "'Arial', sans-serif",color:"#444",
    fontWeight:"500"}}>This is an overall award given to an individual based on the following criteria:</h4>
  <h4 style={{color:"color: #333"}}>Points-Based:</h4>
  <ul className="awards-list">
    <li><span>1st Place &nbsp;  :</span> 100 Points</li>
    <li><span>2nd Place :</span> 75 Points</li>
    <li><span>3rd Place  &nbsp;:</span> 50 Points</li>
  </ul>

  <h4 style={{color: "#333"}}>Participation-Based:</h4>
  <p style={{color: "#555",    fontSize: "13px",
    marginTop: "10px"}}>Both Events (Tech and Non-Tech): 25 Points</p>
</div>

      </Modal.Body>
    </Modal>
  );
};

export default Awards;
