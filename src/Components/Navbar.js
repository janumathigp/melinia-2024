import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
//import logo from "../Assets/logo.jpg";
import { Link } from "react-router-dom";
import {MdGroups} from "react-icons/md";
import {FaFileCode} from "react-icons/fa";
import {FaRegFileCode} from "react-icons/fa";

import meliniaLogo from "../assets/log.png"
import {
  AiOutlineHome,
  
} from "react-icons/ai";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container className='font'>
        <Navbar.Brand href="/" className="d-flex">
          <img src={meliniaLogo} className="logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/board"
                onClick={() => updateExpanded(false)}
              >
                <MdGroups style={{ marginBottom: "2px" }} />  Board Members
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/technical"
                onClick={() => updateExpanded(false)}
              >
                <FaFileCode
                  style={{ marginBottom: "2px" }}
                />{" "}
                Technical Events
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/nontechnical"
                onClick={() => updateExpanded(false)}
              >
                <FaRegFileCode style={{ marginBottom: "2px" }} /> Non-technical Events
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;    