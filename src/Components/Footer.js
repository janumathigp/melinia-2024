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
import { FaWhatsapp } from "react-icons/fa";

import './Footer.css';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  
  const handleClick = () => {
    window.location.href = '/developers';
  };
  
  

  return (
  

<Container fluid className="footer" style={{ zIndex: '10', position: 'relative', height: "200px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>


  <div className="contactus" style={{ display: "flex", flexDirection: "column", textDecoration: "none", color: "white" }}>
    <h3 style={{ fontSize: "15px", color: "white" }}>For Updates..</h3>
    <a href="https://whatsapp.com/channel/0029VaMavcO0QeaqNYTjzW3u" style={{ textDecoration: "none", color: "white", fontSize: "20px" }}>Follow Our <FaWhatsapp /> channel</a>
  </div>

  <div className="dum" style={{ display: "flex", flexDirection: "column" }}>
    <div className="foot" style={{ fontSize: "20px", color: "white" }}>Our Connections</div>
    <div className="socials" style={{ display: "flex", justifyContent: "space-between", fontSize: "20px", color: "white" }}>
      <div className="icons" style={{ display: "flex", justifyContent: "space-between" }}>
            <a
                href="mailto:melinia2k24@gmail.com"
                style={{ color: "white" ,fontSize: '30px',marginRight:"20px",textDecoration:'none'}}
                target="_blank" 
                rel="noopener noreferrer"
              >
              <AiFillMail /> 
              </a>

              <a
                href="https://www.linkedin.com/in/melinia-cit-91810926b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                style={{ color: "white" ,fontSize: '30px' ,marginRight:"20px",textDecoration:'none'}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/melinia.cit/?igsh=MWdxdmM0a3Jzd2Z0dQ%3D%3D"
                style={{ color: "white" ,fontSize: '30px',marginRight:"20px",textDecoration:'none'}}
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
  </div>
</Container>
  );
}

export default Footer;
