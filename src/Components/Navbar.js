  // import React, { useState } from "react";
  // import Navbar from "react-bootstrap/Navbar";
  // import Nav from "react-bootstrap/Nav";
  // import Container from "react-bootstrap/Container";
  // import { Link as ScrollLink } from "react-scroll";
  // import { useMediaQuery } from "react-responsive";
  // import { FiMoreVertical } from "react-icons/fi";

  // import { Link } from "react-router-dom";
  // import citlogo from '../Assets/logo/citlogo.png';
  // import cit from '../Assets/logo/cit.png';

  // function NavBar() {
  //   const [expand, updateExpanded] = useState(false);
  //   const [navColour, updateNavbar] = useState(false);
  //   const isMobile = useMediaQuery({ maxWidth: 767 });


  //   function scrollHandler() {
  //     if (window.scrollY >= 20) {
  //       updateNavbar(true);
  //     } else {
  //       updateNavbar(false);
  //     }
  //   }

  //   window.addEventListener("scroll", scrollHandler);

  //   return (
  //     <Navbar
  //       expanded={expand}
  //       fixed="top"
  //       expand="md"
  //       className={navColour ? "sticky" : "navbar"}
  //     >
  //       <Container className="font">
  //         <Navbar.Brand href="/" className="d-flex">


  //           <img src={isMobile ? cit : citlogo}
  //             className={isMobile ? "mobile" : "logo"} alt="brand" />
  //         </Navbar.Brand>
  //         {isMobile ? (  <FiMoreVertical
  //           onClick={() => {
  //             updateExpanded(!expand);
  //           }}
  //           style={{ color:"white",cursor: "pointer" , fontSize: "4rem"}}
  //           className="navbar-toggler"
  //         />): ""}
        
  //         <Navbar.Collapse id="responsive-navbar-nav">
  //           <Nav className="ms-auto" defaultActiveKey="#home">
  //             <Nav.Item>
  //               <Nav.Link className="scroll-link" as={Link} to="/" onClick={() => updateExpanded(false)}>
  //                 {/* <ScrollLink className="scroll-link" style={{ textDecoration: "none"}}>
  //                 Home
  //                 </ScrollLink> */}
  //                 Home
  //               </Nav.Link>

  //             </Nav.Item>

  //             <Nav.Item>
  //               <Nav.Link
  //               className="scroll-link"
  //                 as={Link}
  //                 to="/board"
  //                 onClick={() => updateExpanded(false)}
  //               >
  //                 {/* <ScrollLink className="scroll-link" style={{ textDecoration: "none"}}>
  //                 Crew
  //                 </ScrollLink> */}
  //                 Crew
  //               </Nav.Link>
  //             </Nav.Item>

             

  //             <Nav.Item>
  //               <Nav.Link className="scroll-link" as={Link} to="/contact" onClick={() => updateExpanded(false)}>
  //                 {/* <ScrollLink
  //                   className="scroll-link"  // Add a specific class for Contact
  //                   to="contact"
  //                   smooth={true}
  //                   duration={500}
  //                   offset={-70}
  //                   spy={true}
  //                   onClick={() => updateExpanded(false)}
  //                   style={{ textDecoration: "none" }}
  //                 >
  //                   Contact
  //                 </ScrollLink> */}
  //                 Contact
  //               </Nav.Link>
  //             </Nav.Item>
  //             <Nav.Item style={{backgroundColor:'#61016e', borderRadius:'10px '}}>
  //               <Nav.Link className="scroll-link">
  //                 {/* <ScrollLink
  //                   className="scroll-link"  // Add a specific class for Events
  //                   to="events"
  //                   smooth={true}
  //                   duration={500}
  //                   offset={-70}
  //                   spy={true}
  //                   onClick={() => updateExpanded(false)}
  //                   style={{ textDecoration: "none"}}
  //                 >
  //                   Events
  //                 </ScrollLink> */}
  //                 Events
  //               </Nav.Link>
  //             </Nav.Item>

  //           </Nav>
  //         </Navbar.Collapse>
  //       </Container>
  //     </Navbar>
  //   );
  // }

  // export default NavBar;


  import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link as ScrollLink } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { FiMoreVertical } from "react-icons/fi";

  import { Link, useLocation, useNavigate } from 'react-router-dom';
  import citlogo from '../Assets/logo/log.png';
  import cit from '../Assets/logo/mobile.png';

const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const navbarRef = useRef(null);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
    if (expand) {
      updateExpanded(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        updateExpanded(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expand]);

  return (
    <Navbar
      ref={navbarRef}
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container className="font">
        <Navbar.Brand href="/" className="d-flex">
          <img src={isMobile ? cit : citlogo}
            className={isMobile ? "mobile" : "logo"} alt="brand" />
        </Navbar.Brand>
        {isMobile ? (
          <FiMoreVertical
            onClick={() => {
              updateExpanded(!expand);
            }}
            style={{ color: "white", cursor: "pointer", fontSize: "4rem" }}
            className="navbar-toggler"
          />
        ) : ""}

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link className="scroll-link" as={Link} to="/" onClick={() => updateExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="scroll-link"
                as={Link}
                to="/board"
                onClick={() => updateExpanded(false)}
              >
                Crew
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="scroll-link" as={Link} to="/contact" onClick={() => updateExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ backgroundColor: '#61016e', borderRadius: '10px ' }}>
              <Nav.Link className="scroll-link">
                Events
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
