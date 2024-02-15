import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Particle } from "../ParticlesBackground";
import AboutMelinia from "../aboutMelinia";

//import melinia from "../../Assets/addon/meliniaposter.jpg"
import QueryCard from "../QueryCard";
import Workshop from "../workshop";
import Sponsors from "../Sponsers";
import ChiefGuest from "../ChiefGuest";
import Timeline from "../Timeline/Timeline";
import Contact from '../Contact/Contact';
import Events from '../Events/Events';
import yearsImage from '../../Assets/logo/years25.png';
import Awards from "../Awards/Awards";
import { useEffect } from "react";
function Home() {
  const [isEventCompleted, setCondition] = useState(false);

  const [showModal, setShowModal] = useState(true);

  const updateIsAward = (value) => {
    setShowModal(value);
  };

  useEffect(() => {
    // Open the Awards Information modal when the component mounts
    setShowModal(true);

    // Cleanup function to close the modal when the component unmounts
    return () => {
      setShowModal(false);
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount


  return (
    <>
    <Awards isAward={showModal} onClose={() => setShowModal(false)} updateIsAward={updateIsAward} showAwardsInfo={true} />
      <Particle />
      <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col className="home-header">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1 style={{ paddingBottom: 15, textAlign: 'center',fontFamily:"Audiowide",fontSize:"1.5em"}} className=" q">
                    Coimbatore Institute of Technology
                  </h1>
                  <h1 style={{ paddingBottom: 15, textAlign: 'center',fontFamily:"Audiowide",fontSize:"1.3em"}} className="q">
                    Department of Computing <br/>MSc SS | DS | DCS | AIML
                  </h1>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                    <strong className="main-name"> 2K24  </strong>
                  </h1>
                  <h1 style={{ paddingBottom: 15, textAlign: 'center' }} className="heading">
                    National Level Technical Symposium 
                    <br></br>     <br></br>
                  <div style={{ maxWidth: '100%', height: 'auto' }}>
                  <img src={yearsImage} alt="25 Years" style={{ width: '100%' }} />
                </div>
 
                  </h1>
                  {isEventCompleted ? (
                    <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '15px' }}>
                      <span className="rajdhaniFont">Melinia 2k24's over we'll meet you soon next year</span>
                    </div>
                  ) : null}
                  <div style={{ padding: 50, textAlign: "left" }}>
                    {/* <Type /> */}
                  </div>
                </div>
              </Col>
            
            </Row>
          </Container>
          <Container style={{ margin: 0, padding: 0, minWidth: '100%', marginBottom:"30px" }}>
            <AboutMelinia />
          </Container>
          <Container style={{ margin: 0, padding: 0, minWidth: '100%',marginBottom:"30px" }}>
            <Events />
          </Container>
          <Container style={{ margin: 0, padding: 0, minWidth: '100%', marginBottom:"30px" }}>
            <Workshop />
          </Container>
          {/* <Container style={{ margin: 0, padding: 0, minWidth: '100%', marginBottom:"30px" }}>
            <QueryCard />
          </Container> */}
          <Container style={{ margin: 0, padding: 0, minWidth: '100%', marginBottom:"30px" }}>
            <Sponsors />
          </Container>
          <Container style={{ margin: 0, padding: 0, minWidth: '100%', marginBottom:"30px" }}>
            <ChiefGuest />
          </Container>
         
          <Container style={{ margin: 0, padding: 0, minWidth: '100%', marginBottom:"50px" }}>
            <Timeline />
          </Container>

          {/* <div class="divv" style={{color: 'white',fontSize:'1.6rem',fontWeight: 700,fontFamily: "Audiowide"}}>Feel</div> */}
          
  
   
  

          {/* <Container style={{ margin: 0, padding: 0, minWidth: '100%', marginBottom:"0px" }}>
            <Contact />
          </Container> */}
        </Container>
      </section>
    </>
  );
}

export default Home;
