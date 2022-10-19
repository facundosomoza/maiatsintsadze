import React from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { useLocation } from "react-router-dom";

import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";

export default function PurchasePicture({ joinIn }) {
  const history = useHistory();

  const IMAGES_BASE_URL =
    "https://raw.githubusercontent.com/facundosomoza/maiatsintsadze/main/react/src/data/pictures/";

  const location = useLocation();

  const picture = location.state;

  const handleButtonPurchase = () => {
    if (joinIn === true) {
      history.push("/summarypurchase", picture);
    } else {
      localStorage.setItem("account", JSON.stringify(picture));
      history.push("/formaccount");
    }
  };

  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`${IMAGES_BASE_URL}${picture.image}`} />
        <Card.Body>
          <Card.Title>{picture.name}</Card.Title>
          <Card.Text>{picture.description}</Card.Text>
          <Card.Text>{picture.price}</Card.Text>
          <Button variant="primary" onClick={handleButtonPurchase}>
            Purchase
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
