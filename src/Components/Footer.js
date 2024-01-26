import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillMail,
  AiFillInstagram,
  AiFillPhone,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from "react-router-dom";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  
  const handleClick = () => {
    window.location.href = '/developers';
  };
  
  

  return (
    <Container fluid className="footer" style={{zIndex:'10',position:'relative'}}>
      <Row>
        {/* <Col md="4" className="footer-copywright">
          <h3 style={{cursor:'pointer'}} onClick={() => window.location.href = '/developers'}>Designed and Developed by M.Sc<ArrowForwardIcon  sx={{fontSize:"18px",marginLeft:"4px",color:"white"}}/></h3>
        </Col> */}
<Col md="4"  className="footer-copywright">
        <h3
          style={{ cursor: 'pointer' }}
          onClick={handleClick}
        >
          Designed and Developed by M.Sc<ArrowForwardIcon sx={{ fontSize: "18px", marginLeft: "4px", color: "white" }} />
        </h3>
      </Col>


        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} M.Sc</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/melinia-cit-91810926b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/melinia.cit/?igsh=MWdxdmM0a3Jzd2Z0dQ%3D%3D"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillPhone />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://youtube.com/@meliniacit8188?si=SaWs2IP_NrfF4Ubh   "
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
