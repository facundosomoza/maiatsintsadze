import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

import { Link } from "react-router-dom";

export default function FormAccount() {
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
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                </Form>
              </Card.Text>
              <Button variant="primary">SIGN IN</Button>
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
