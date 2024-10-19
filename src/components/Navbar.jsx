import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    setExpanded(false);
    navigate(path);
  };
  return (
    <Navbar expanded={expanded} onToggle={() => setExpanded(!expanded)} expand="lg" className="bg-body-secondary fixed-top">
      <Container>
        <img src="/athletics.ico" alt="logo" width="30" height="24" className="d-inline-block align-text-top m-1" />
        <a className="badge text-bg-light text-wrap fst-italic px-3 me-1 border border-info" >RUN</a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end text-center me-4">
          <Nav>
            <Nav.Link onClick={() => handleLinkClick('/home')} href="/#">Home</Nav.Link>
            <Nav.Link onClick={() => handleLinkClick('/#run2022')} href="#run2022">Run 2022</Nav.Link>
            <Nav.Link onClick={() => handleLinkClick('/#run2023')} href="#run2023">Run 2023</Nav.Link>
            <Nav.Link onClick={() => handleLinkClick('/#run2024')} href="#run2024">Run 2024</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
