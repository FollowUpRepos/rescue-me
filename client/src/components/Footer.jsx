import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-dark mt-5">
      <Row>
        <Col xs={12} md={6} className="text-center">
          <Nav className="justify-content-center justify-content-md-start">
            <Nav.Item>
              <Nav.Link href="#">Contact us</Nav.Link>
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
              <Nav.Link href="#">Social1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Social2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Social3</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
