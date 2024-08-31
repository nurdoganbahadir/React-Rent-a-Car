import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const Main = ({ item }) => {
  const { brand, model, fuel, gear, img, insurance, year, info, price } = item;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <h6>{price}</h6>
          <>
            <Button variant="primary" onClick={handleShow}>
              Detaylı Bilgi
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {brand} {model}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Yakıt Türü: {fuel}</p>
                <p>Vites: {gear}</p>
                <p>Kasko: {insurance}</p>
                <p>Model Yılı: {year}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Main;
