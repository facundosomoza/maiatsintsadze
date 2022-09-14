import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

export default function NewAccount({ handleUserEmail, handleJoinIn }) {
  const [firstName, setFirstName] = useState("");
  const [firstLastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleMobileNumber = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleClick = () => {
    handleJoinIn();
    handleUserEmail(email);
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={9} sm={8} md={7} lg={5} xl={5} className="bg-light mt-5">
            <Form>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" onChange={handleFirstName} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" onChange={handleLastName} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" onChange={handleCountry} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" onChange={handleAddress} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" onChange={handleEmail} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={handlePassword} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text" onChange={handleMobileNumber} />
              </Form.Group>
            </Form>
            <Button variant="primary" onClick={handleClick}>
              Register
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
