import React from "react";

import Card from "react-bootstrap/Card";

import img1 from "../data/pictures/image1.JPG";

export default function Portfolio({ pictures }) {
  return (
    <>
      {pictures.map((picture) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>{picture.name}</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
