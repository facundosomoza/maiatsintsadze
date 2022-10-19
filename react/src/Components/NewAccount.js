import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

import Swal from "sweetalert2";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { useHistory } from "react-router-dom";

export default function NewAccount({ app, handleNewAccount }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const history = useHistory();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    let value = true;

    if (email.trim().length === 0) {
      setMessage("You must complete the field");
      value = false;
    }
    if (password.trim().length === 0) {
      setMessage("You must complete the field");
      value = false;
    }

    if (value) {
      handleRegister();
    }
  };

  const handleRegister = async () => {
    try {
      const auth = getAuth(app);

      const res = await createUserWithEmailAndPassword(auth, email, password);
      Swal.fire("You have succesfully registered");

      localStorage.setItem(
        "user",
        JSON.stringify({
          email: email,
        })
      );

      const newAccount = localStorage.getItem("account");

      if (newAccount) {
        history.push("/summarypurchase");
      } else {
        history.push("/");
      }

      handleNewAccount(email);

      setEmail("");
      setPassword("");
    } catch (err) {
      Swal.fire("User or Password are not valid");
    }
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={9} sm={8} md={7} lg={5} xl={5} className="bg-light mt-5">
            <Form>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleEmail}
                  value={email}
                />
                {email ? "" : message}
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={handlePassword}
                  value={password}
                />
                {password ? "" : message}
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
