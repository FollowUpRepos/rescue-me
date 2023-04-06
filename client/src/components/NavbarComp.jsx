import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/logo.svg"
            width="60"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">About</Nav.Link>

            <NavDropdown
              title="Adopt/Get involved"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Adopting Rules/Process
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Foster</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shelters</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Donate</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/services">Login</Nav.Link>
            <Nav.Link href="/contact">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComp;
