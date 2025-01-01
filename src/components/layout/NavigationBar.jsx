import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <Navbar sticky="top" bg="light" variant="primary">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Simple Client
          </Navbar.Brand>

          <Nav className="justify-content-end">
            <Nav.Link as={NavLink} to="/add">
              Create
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
