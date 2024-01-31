import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import melinialogo from '../Assets/logo/log.png'
import {
  AiFillMail,
  AiFillInstagram,
  AiFillPhone,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  
  const handleClick = () => {
    window.location.href = '/developers';
  };
  
  

  return (
    <Container fluid className="footer" style={{zIndex:'10',position:'relative', height:"200px", display:"flex", justifyContent:"space-around", alignItems:"center"}}>

      <div className="mel-logo"> 
      
      <img src={melinialogo} style={{width: "150px", height:"40px"}}/>
      
      </div>

      <div className="contactus">
        <h3>Contact us</h3>
        <p>melinia@gmail.com</p>
        <p>+91 9360638869</p>
      </div>
      <div className="socials" style={{display:"flex", justifyContent:"space-between"}}>
      <div className="icons" style={{display:"flex", justifyContent:"space-between"}} >
          <a
                href="/"
                style={{ color: "white" ,fontSize: '30px',textDecoration:'none'}}
                target="_blank" 
                rel="noopener noreferrer"
              >
              <AiFillMail /> 
              </a>

              <a
                href="https://www.linkedin.com/in/melinia-cit-91810926b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                style={{ color: "white" ,fontSize: '30px' ,textDecoration:'none'}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/melinia.cit/?igsh=MWdxdmM0a3Jzd2Z0dQ%3D%3D"
                style={{ color: "white" ,fontSize: '30px',textDecoration:'none'}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>

              <a
                href="https://youtube.com/@meliniacit8188?si=SaWs2IP_NrfF4Ubh   "
                style={{ color: "white",fontSize: '30px' ,textDecoration:'none'}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
              </a>


          </div>
      </div>
   
    </Container>
  );
}

export default Footer;
