import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom";

function NavbarComp() {
  return (

      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              src='/logo.svg'
              width='60'
              height='30'
              className='d-inline-block align-top'
              alt='logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to={"/about"}>
                About
              </Nav.Link>

              <NavDropdown
                title='Adopt/Get involved'
                id='collasible-nav-dropdown'
              >
                <NavDropdown.Item as={Link} to={"/adoptionprocess"}>
                  Adopting Rules/Process
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/foster"}>Foster</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/shelter"}>Shelters</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/donate"}>Donate</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href='/services'>Login</Nav.Link>   
              <Nav.Link href='/contact'>Sign up</Nav.Link>   
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
  );
}
export default NavbarComp;
