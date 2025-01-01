import { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

import Layout from "../../components/layout/Layout";

function UserInput() {
  const createUserEndpoint = "http://localhost:4000/v1/user/add";

  const [user, setUser] = useState({
    name: "",
    email: "",
    city: "",
    country: "",
  });

  const SetUserData = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => {
      return { ...prevUser, [name]: value };
    });
  };

  const createNewUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${createUserEndpoint}`, user);
      if (response.data?.status === "OK") {
        toast.success("User has been created");
        setUser({
          name: "",
          email: "",
          city: "",
          country: "",
        });
      } else {
        toast.warn("an error has occured");
      }
    } catch (err) {
      toast.error("error occured when creating user");
      console.log(err.message);
    }
  };

  return (
    <Layout>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={SetUserData}
                name="name"
                value={user.name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={SetUserData}
                name="email"
                value={user.email}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                onChange={SetUserData}
                name="city"
                value={user.city}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Country"
                onChange={SetUserData}
                name="country"
                value={user.country}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={createNewUser}>
              Add
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
}

export default UserInput;
