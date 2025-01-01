import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={{ span: 3, offset: 1 }}>
            <h4>Contact</h4>
            <NavLink to="/contact">Contact</NavLink>
          </Col>
          <Col md={{ span: 3, offset: 1 }}>
            <h4>User</h4>
            <NavLink to="/add">Create User</NavLink>
          </Col>
          <Col md={{ span: 3, offset: 1 }}>
            <h4>About Us</h4>
            <NavLink to="/about">About Us</NavLink>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
