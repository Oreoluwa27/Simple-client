import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Form, Col, Row, Button } from "react-bootstrap";
import { toast } from "react-toastify";

import Layout from "../layout/Layout";

function EditUser() {
  const { userId } = useParams();
  const EditUserEndpoint = `http://localhost:4000/v1/user/update/${userId}`;
  const RetrieveUserEndpoint = `http://localhost:4000/v1/user/${userId}`;
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${RetrieveUserEndpoint}`);

      setUser(response.data.message);
    } catch (err) {
      //const response = err.data?.message;
      setUser({});
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  const SetUserData = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => {
      return { ...prevUser, [name]: value };
    });
  };

  const UpdateUserData = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`${EditUserEndpoint}`, user);
      if (response.data?.status === "OK") {
        toast.success("User has been Updated");
      } else {
        toast.warn("an error has occured");
      }
    } catch (err) {
      toast.error("error occured when updating user");
      console.log(err.message);
    }
  };

  return (
    <Layout>
      {user?.name ? (
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

              <Button variant="primary" type="submit" onClick={UpdateUserData}>
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      ) : (
        <p className="text-center">user does not exit</p>
      )}
    </Layout>
  );
}
export default EditUser;
