import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

import Layout from "../../components/layout/Layout";
import { NavLink } from "react-router-dom";

function UsersList() {
  const getAllUsersEndpoint = "http://localhost:4000/v1/user/all";
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    const res = await axios.get(`${getAllUsersEndpoint}`);

    setUsers(res.data.message);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const renderedUsers = users.map((user) => {
    return (
      <Row key={user.id} className="justify-content-center mb-5">
        <Col lg={4}>
          <Card>
            <Card.Body>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
              {user.city && user.country && (
                <p>
                  {" "}
                  {user.city} - {user.country}
                </p>
              )}
              <Button
                as={NavLink}
                to={`/edit/${user.id}`}
                variant="primary"
                className="mx-3"
              >
                Edit
              </Button>
              <Button
                as={NavLink}
                to={`/remove/${user.id}`}
                variant="danger"
                className="mx-3"
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  });

  return (
    <Layout>
      <h3 className="text-center">Users</h3>
      <Row className="d-flex flex-row flex-wrap justify-content-between ">
        {renderedUsers}
      </Row>
    </Layout>
  );
}

export default UsersList;
