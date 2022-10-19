import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

import Swal from "sweetalert2";

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

export default function FormAccount({ app, handleUserEmailContact }) {
  const history = useHistory();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleUserEmail = (event) => {
    setUserEmail(event.target.value);
  };

  const handleUserPassword = (event) => {
    setUserPassword(event.target.value);
  };

  const handleSignIn = () => {
    let value = true;

    if (userEmail.trim().length === 0) {
      setMessage("You must complete the field");
      value = false;
    }
    if (userPassword.trim().length === 0) {
      setMessage("You must complete the field");
      value = false;
    }
    if (value) {
      LoginUser();
    }
  };

  const LoginUser = async () => {
    try {
      const auth = getAuth(app);

      const res = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );

      localStorage.setItem("user", JSON.stringify({ userEmail }));

      const account = localStorage.getItem("account");

      if (account) {
        history.push("/summarypurchase");
      } else {
        history.push("/");
      }

      handleUserEmailContact(userEmail);

      setUserEmail("");
      setUserPassword("");
    } catch (error) {
      Swal.fire("User or Password invalid");
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Existing Customer</Card.Title>
              <Card.Text>
                <Form>
                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" onChange={handleUserEmail} />
                    {userEmail ? "" : message}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={handleUserPassword}
                    />
                    {userPassword ? "" : message}
                  </Form.Group>
                </Form>
              </Card.Text>
              <Button variant="primary" onClick={handleSignIn}>
                SIGN IN
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>New Customer</Card.Title>
              <Link to="/newaccount">JOIN</Link>
              <Card.Text>Check out with saved details</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
