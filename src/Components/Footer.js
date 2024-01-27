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

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  
  const handleClick = () => {
    window.location.href = '/developers';
  };
  
  

  return (
    <Container fluid className="footer" style={{zIndex:'10',position:'relative', height:"250px"}}>
      <Row>
        {/* <Col md="4" className="footer-copywright">
          <h3 style={{cursor:'pointer'}} onClick={() => window.location.href = '/developers'}>Designed and Developed by M.Sc<ArrowForwardIcon  sx={{fontSize:"18px",marginLeft:"4px",color:"white"}}/></h3>
        </Col> */}



        {/* <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} M.Sc</h3>
        </Col> */}

        <Col md="6" className="footer-body" >
          <ul className="footer-icons" style={{display:'flex',flexDirection:'column', margin:'40px 40px'}}  >
            <li className="social-icons" style={{display:'flex',flexDirection:'row', marginBottom:'20px',marginTop:'20px'}}>
              <a
                href="/"
                style={{ color: "white" ,fontSize: '30px',textDecoration:'none'}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="link" style={{display:"flex", flexDirection:'row'}}><AiFillMail /> <div className = "footer-links"style={{fontSize:'20px', marginLeft:"20px"}}>melinia@gmail.com</div></div>
              </a>
            </li>
            
            <li className="social-icons" style={{display:'flex',flexDirection:'row', marginBottom:'20px'}}>
              <a
                href="https://www.linkedin.com/in/melinia-cit-91810926b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                style={{ color: "white" ,fontSize: '30px' ,textDecoration:'none'}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="link" style={{display:"flex", flexDirection:'row',}}><FaLinkedinIn /><div className = "footer-links"style={{fontSize:'20px', marginLeft:"20px"}}>Melinia CIT</div></div>
              </a>
            </li>
            <li className="social-icons" style={{display:'flex',flexDirection:'row', marginBottom:'20px'}}>
              <a
                href="https://www.instagram.com/melinia.cit/?igsh=MWdxdmM0a3Jzd2Z0dQ%3D%3D"
                style={{ color: "white" ,fontSize: '30px',textDecoration:'none'}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="link" style={{display:"flex",  flexDirection:'row',}}><AiFillInstagram /><div className = "footer-links"style={{fontSize:'20px', marginLeft:"20px"}}>melinia.cit</div></div>
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="/"
                style={{ color: "white" ,fontSize: '30px'}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillPhone />
              </a>
            </li> */}
            <li className="social-icons" style={{display:'flex',flexDirection:'row', marginBottom:'20px'}}>
              <a
                href="https://youtube.com/@meliniacit8188?si=SaWs2IP_NrfF4Ubh   "
                style={{ color: "white",fontSize: '30px' ,textDecoration:'none'}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="link" style={{display:"flex", flexDirection:'row',}}><AiFillYoutube /><div className = "footer-links"style={{fontSize:'20px', marginLeft:"20px"}}>melinia 2024  </div></div>
              </a>
            </li>
          </ul>
        </Col>

        <Col md="4"  className="footer-copywright">
        <h3
          style={{ cursor: 'pointer' }}
          onClick={handleClick}
        >
          Designed and Developed by M.Sc<ArrowForwardIcon sx={{ fontSize: "20px", marginLeft: "4px", color: "white" }} />
        </h3>
      </Col>
      </Row>
    </Container>
  );
}

export default Footer;
