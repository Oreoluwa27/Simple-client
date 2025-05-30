import Layout from "../../components/layout/Layout";
import { Col, Row } from "react-bootstrap";

function AboutUs() {
  return (
    <Layout>
      <h3 className="text-center">About Us!</h3>
      <Row className="justify-content-center">
        <Col md={6}>About Us, Lorem </Col>
      </Row>
    </Layout>
  );
}

export default AboutUs;
