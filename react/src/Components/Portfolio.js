import React from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

export default function Portfolio({ pictures }) {
  /*   const history = useHistory(); */

  const IMAGES_BASE_URL =
    "https://raw.githubusercontent.com/facundosomoza/maiatsintsadze/main/react/src/data/pictures/";

  const compararNumeros = (num1, num2) => {
    /*if (num1 > num2) {
      //Retorno un numero positivo significa que num1 es mayor que num2
      return 1;
    } else if (num1 < num2) {
      //Retorno un numero negativo significa que num1 es menor que num2
      return -1;
    } else {
      //Retorno un cero significa que num1 es igual a num2
      return 0;
    }*/

    return num1 - num2;
  };

  const compararPicture = (picture1, picture2) => {
    return picture1.order - picture2.order;
  };

  const getSortedPictures = () => pictures.sort(compararPicture);

  /*   const handlePictureClick = () => {
    history.push("/purchasepicture");
  }; */

  return (
    <Container>
      <Row>
        {getSortedPictures().map((picture) => (
          <Col>
            <Link to={{ pathname: "/purchasepicture", state: picture }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={IMAGES_BASE_URL + picture.image} />
                <Card.Body>
                  <Card.Title>{picture.name}</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
