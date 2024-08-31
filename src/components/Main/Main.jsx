import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";

const Main = ({ item }) => {
  const { id, brand, model, fuel, gear, img, insurance, year, info } = item;

  return (
    <Col
      xs={12}
      md={6}
      lg={4}
      xl={3}
      className="d-flex justify-content-center align-items-center"
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{brand}</Card.Title>
          <h6>{model}</h6>
          <Card.Text>{info}</Card.Text>
          <Button variant="primary">Detaylı Bilgi</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Main;
