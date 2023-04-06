import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

import { BsInstagram, BsFacebook, BsFillShareFill } from "react-icons/bs";



const Footer = () => {
  return (
    <Container fluid className="bg-dark mt-5 footer">
      <Row>
        <Col xs={12} md={6} className="text-center">
          <Nav className="justify-content-center justify-content-md-start">
            <Nav.Item>
              <Nav.Link  as={Link} to={"/contact"}>Contact us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Imprint</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">TOC's</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <Nav className="justify-content-center justify-content-md-end">
            <Nav.Item>
              <Nav.Link href="#">
                <BsInstagram size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                <BsFacebook size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                <BsFillShareFill size={30} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
