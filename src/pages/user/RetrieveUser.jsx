import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Card, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import Layout from "../../components/layout/Layout";

function RetrieveUser() {
  const { userId } = useParams();
  const getUserEndpoint = `http://backend-service.default.svc.cluster.local:80/v1/user/${userId}`;

  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${getUserEndpoint}`);

      setUser(response.data.message);
    } catch (err) {
      //const response = err.data?.message;
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  return (
    <Layout>
      {user?.name ? (
        <Row className="justify-content-center mb-5">
          <Col lg={6}>
            <Card>
              <Card.Body>
                <h3 className="justify-content-center ">{user.name}</h3>
                <p>{user.email}</p>
                {user.city && user.country && (
                  <p>
                    {user.city} - {user.country}
                  </p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <p className="text-danger text-center">No user found</p>
      )}
    </Layout>
  );
}

export default RetrieveUser;
