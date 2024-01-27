import React, { useState } from "react";
import meliniaEvent from "../assets/addon/melinia.jpg";
import workshopImage from "../assets/addon/workshop.jpeg";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { FaArrowRight } from "react-icons/fa";
function Workshop() {
  const [isEventCompleted, setCondition] = useState(false);

  return (
    <div className="workshopMainBox">
 <div className="workshopBox">
 <div>
 <img className="workshopImage" src={workshopImage} alt="Event"/>
   </div>
   <div className="verticalDivider" style={{height:'300px', width:'10px', backgroundColor:'#676368', marginLeft:'20px', marginRight:'15px'}}></div>
<div style={{paddingLeft:'30px', paddingRight:'20px', marginTop: '20px'}}>
<div className="d-flex justify-content-between flex-column flex-md-row">
<div>
<span className="workshopSubFont font-weight-bold">Workshop</span>
</div>
<div>
<span className="workshopSubFont font-weight-bold" style={{color:'gray', fontSize:'0.9em'}}>5TH APRIL 10.00 - 11.30 AM</span>
</div>
</div>
<div style={{marginTop: '5px'}}>
   <span className="workshopFont">THE ENTREPRENEURIAL MINDSET</span> 
   </div>
   <Divider className="horizontalDivider" style={{padding:'0', margin:'0', marginTop:'10px', borderColor:'black'}}/>
   <p className="rajdhaniFont" style={{textAlign:'initial', marginTop:'20px'}}>Are you an aspiring entrepreneur looking to learn from a successful founder? Join Prashanth Ganesh, founder of PreSkale, and our alumni, for "Revive the Entrepreneur in You", a one-day workshop that will provide you with the tools and resources to launch and grow your own business. Don't miss out on this exciting opportunity to revive the entrepreneur in you!</p>
   <div style={{display:'flex', justifyContent:'end'}}>
 {!isEventCompleted ? (
  <Button className="buttonFont" style={{backgroundColor:'#61016e'}} variant="contained">Register <FaArrowRight style={{marginLeft:'3px'}} /></Button>

 ) : (<Button className="buttonFont" style={{color:'#61016e', borderColor:'#61016e'}} variant="outlined">Event Completed <FaArrowRight style={{marginLeft:'3px'}} /></Button>)}
   

 </div>
   </div>
   
   
 </div> 
 <Divider style={{padding:'0', margin:'0', borderColor:'black'}}/>


{/* second card */}
 <div className="workshopBox">
 <div className="reverseFlex">
 <div>
 <img className="workshopImage" src={workshopImage} alt="Event"/>
   </div>
   <div className="verticalDivider" style={{height:'300px', width:'10px', backgroundColor:'#676368', marginLeft:'20px', marginRight:'25px'}}></div>
<div style={{paddingLeft:'30px', paddingRight:'20px', marginTop: '20px'}}>
<div className="d-flex justify-content-between flex-column flex-md-row">
<div>
<span className="workshopSubFont font-weight-bold">Workshop</span>
</div>
<div>
<span className="workshopSubFont font-weight-bold" style={{color:'gray', fontSize:'0.9em'}}>5TH APRIL 10.00 - 11.30 AM</span>
</div>
</div>
<div style={{marginTop: '5px'}}>
   <span className="workshopFont">THE ENTREPRENEURIAL MINDSET</span> 
   </div>
   <Divider className="horizontalDivider" style={{padding:'0', margin:'0', marginTop:'10px', borderColor:'black'}}/>
   <p className="rajdhaniFont" style={{textAlign:'initial', marginTop:'20px'}}>Are you an aspiring entrepreneur looking to learn from a successful founder? Join Prashanth Ganesh, founder of PreSkale, and our alumni, for "Revive the Entrepreneur in You", a one-day workshop that will provide you with the tools and resources to launch and grow your own business. Don't miss out on this exciting opportunity to revive the entrepreneur in you!</p>
   <div style={{display:'flex', justifyContent:'end'}}>
   {!isEventCompleted ? (
  <Button className="buttonFont" style={{backgroundColor:'#61016e'}} variant="contained">Register <FaArrowRight style={{marginLeft:'3px'}} /></Button>

 ) : (<Button className="buttonFont" style={{color:'#61016e', borderColor:'#61016e'}} variant="outlined">Event Completed <FaArrowRight style={{marginLeft:'3px'}} /></Button>)}
 </div>
   </div>
   </div>
   
   
 </div> 

 <Divider style={{padding:'0', margin:'0', borderColor:'black'}}/>

 {/* Third Box*/}
 <div className="workshopBox">
 <div>
 <img className="workshopImage" src={workshopImage} alt="Event"/>
   </div>
   <div className="verticalDivider" style={{height:'300px', width:'10px', backgroundColor:'#676368', marginLeft:'20px', marginRight:'15px'}}></div>
<div style={{paddingLeft:'30px', paddingRight:'20px', marginTop: '20px'}}>
<div className="d-flex justify-content-between flex-column flex-md-row">
<div>
<span className="workshopSubFont font-weight-bold">Workshop</span>
</div>
<div>
<span className="workshopSubFont font-weight-bold" style={{color:'gray', fontSize:'0.9em'}}>5TH APRIL 10.00 - 11.30 AM</span>
</div>
</div>
<div style={{marginTop: '5px'}}>
   <span className="workshopFont">THE ENTREPRENEURIAL MINDSET</span> 
   </div>
   <Divider className="horizontalDivider" style={{padding:'0', margin:'0', marginTop:'10px', borderColor:'black'}}/>
   <p className="rajdhaniFont" style={{textAlign:'initial', marginTop:'20px'}}>Are you an aspiring entrepreneur looking to learn from a successful founder? Join Prashanth Ganesh, founder of PreSkale, and our alumni, for "Revive the Entrepreneur in You", a one-day workshop that will provide you with the tools and resources to launch and grow your own business. Don't miss out on this exciting opportunity to revive the entrepreneur in you!</p>
   <div style={{display:'flex', justifyContent:'end'}}>

   {!isEventCompleted ? (
  <Button className="buttonFont" style={{backgroundColor:'#61016e'}} variant="contained">Register <FaArrowRight style={{marginLeft:'3px'}} /></Button>

 ) : (<Button className="buttonFont" style={{color:'#61016e', borderColor:'#61016e'}} variant="outlined">Event Completed <FaArrowRight style={{marginLeft:'3px'}} /></Button>)}
 </div>
   </div>
   
   
 </div> 

 
 </div>

 

 

  );
}

export default Workshop;
