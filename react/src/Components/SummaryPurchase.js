import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";

import { useLocation } from "react-router-dom";

export default function SummaryPurchase() {
  const location = useLocation();

  const [summaryCountry, setSummaryCountry] = useState("");
  const [summaryName, setSummaryName] = useState("");
  const [summaryPhone, setSummaryPhone] = useState("");
  const [summaryPostcode, setSummaryPostcode] = useState("");
  const [summaryAddress, setSummaryAddress] = useState("");
  const [summaryCity, setSummaryCity] = useState("");

  const IMAGES_BASE_URL =
    "https://raw.githubusercontent.com/facundosomoza/maiatsintsadze/main/react/src/data/pictures/";

  let picture = null;
  let namePicture = null;
  let description = null;
  let price = null;

  if (localStorage.getItem("account")) {
    const pictureData = JSON.parse(localStorage.getItem("account"));

    picture = pictureData.image;
    namePicture = pictureData.name;
    description = pictureData.description;
    price = pictureData.price;
  } else {
    picture = location.state.image;
    namePicture = location.state.name;
    description = location.state.description;
    price = location.state.price;
  }

  const handleSummaryCountry = (event) => {
    setSummaryCountry(event.target.value);
  };

  const handleSummaryName = (event) => {
    setSummaryName(event.target.value);
  };

  const handleSummaryPhone = (event) => {
    setSummaryPhone(event.target.value);
  };

  const handleSummaryPostcode = (event) => {
    setSummaryPostcode(event.target.value);
  };

  const handleSummaryAddress = (event) => {
    setSummaryAddress(event.target.value);
  };

  const handleSummaryCity = (event) => {
    setSummaryCity(event.target.value);
  };

  const handleCheckOut = () => {
    console.log("check out");
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Form>
            <h1>Shipping</h1>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" onChange={handleSummaryCountry} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" onChange={handleSummaryName} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="email" onChange={handleSummaryPhone} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Postcode</Form.Label>
              <Form.Control type="text" onChange={handleSummaryPostcode} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" onChange={handleSummaryAddress} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Town/City</Form.Label>
              <Form.Control type="text" onChange={handleSummaryCity} />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={`${IMAGES_BASE_URL}${picture}`} />
            <Card.Body>
              <Card.Title>{namePicture}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>{price}</Card.Text>
            </Card.Body>
            <Button variant="outline-dark" onClick={handleCheckOut}>
              Check Out
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
