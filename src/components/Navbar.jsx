import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
    setExpanded(false);
  };
  return (
    <Navbar expanded={expanded} onToggle={() => setExpanded(!expanded)} expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
      <img src="/public/athletics.ico" alt="logo" width="30" height="24" className="d-inline-block align-text-top m-1" />
      <a className="badge text-bg-light text-wrap fst-italic px-3 ms-1 me-5 border border-info" >RUN</a>
        {/* <Navbar.Brand>RUN</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#" onClick={handleLinkClick}>Home</Nav.Link>
            <Nav.Link href="#run2022" onClick={handleLinkClick}>Run 2022</Nav.Link>
            <Nav.Link href="#run2023" onClick={handleLinkClick}>Run 2023</Nav.Link>
            <Nav.Link href="#run2024" onClick={handleLinkClick}>Run 2024</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
