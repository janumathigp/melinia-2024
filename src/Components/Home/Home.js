import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Particle } from "../ParticlesBackground";
import AboutMelinia from "../aboutMelinia";
import QueryCard from "../QueryCard";
import Workshop from "../workshop";
import citlogo from "../../Assets/logo/citlogo.png"
import Sponsors from "../Sponsers";
import ChiefGuest from "../ChiefGuest";
import Timeline from "../Timeline/Timeline";
import Contact from '../Contact/Contact';
import Events from '../Events/Events';


function Home() {

  const [isEventCompleted, setCondition] = useState(false);
  return (
    <>
      
      <Particle></Particle>
    <section>
     
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row> 
            <Col className="home-header">
              <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>

              <h1 style={{ paddingBottom: 15, textAlign: 'center' }} className="heading">
                Department of Computing
              </h1>
              <div style={{display:'flex', justifyContent:'center'}}>
              <div className="rajdhaniFont">
                <span>
                  Proudly Presents
                </span>
                <br></br>
              </div>
              <br></br>
              <br></br>
              
              </div>

              <h1 className="heading-name meliniaFont">
                MELINIA
                <strong className="main-name"> 2024  </strong>
              </h1>
              <h1 style={{ paddingBottom: 15, textAlign: 'center' }} className="heading">
                A national level technical symposium
                
              </h1>

              {/* <div style={{display:'flex', justifyContent:'center'}}>
                <img className="citLogo" src={citlogo} alt="CIT"/>
              </div> */}

              {isEventCompleted ? (<div style={{display:'flex', justifyContent:'center', textAlign:'center', marginTop:'15px'}}>
                <span className="rajdhaniFont">Melinia 2k24's over we'll meet you soon next year</span>
              </div>) : null}
              

              <div style={{ padding: 50, textAlign: "left" }}>
                {/* <Type /> */}
              </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              /> */}
            </Col>
          </Row>
          
        </Container>


        <Container style={{margin:0, padding: 0, minWidth:'100%'}}>
        <AboutMelinia/>
        </Container>
       
        <Container style={{margin:0, padding: 0, minWidth:'100%'}}>
        <Events/>
        </Container>
        <Container style={{margin:0, padding: 0, minWidth:'100%'}}>
        <Workshop/>
        </Container>
       
        <Container style={{margin:0, padding: 0, minWidth:'100%'}}>
          <QueryCard/>
        </Container>
        <Container style={{margin:0, padding: 0, minWidth:'100%'}}>
          <Sponsors/>
        </Container>
        <Container style={{margin:0, padding: 0, minWidth:'100%'}}>
          <ChiefGuest/>
        </Container>
 
        <Container>
  <Timeline/>
</Container>
<Container >
          <Contact/>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
    
    
    </>
  );
}

export default Home;
