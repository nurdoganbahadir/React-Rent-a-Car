import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import bgImg from "../../assets/bg-img.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="header-nav">
          <Navbar.Brand href="#home">TNY Rent a Car</Navbar.Brand>
          <Form.Control
            type="search"
            placeholder="Search"
            className=" mr-sm-2 w-50"
          />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
