import Layout from "../../components/layout/Layout";
import { Col, Row } from "react-bootstrap";

function Contact() {
  return (
    <Layout>
      <h3 className="text-center">Contact</h3>
      <Row className="justify-content-center">
        <Col className="text-center" md={6}>
          contact me at <span className="fst-italic"> ore@gmail.com</span>
        </Col>
      </Row>
    </Layout>
  );
}

export default Contact;
