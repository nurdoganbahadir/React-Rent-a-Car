import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";

const Header = ({ setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="header-nav">
          <Navbar.Brand href="#home">TNY Rent a Car</Navbar.Brand>
          <Form.Control
            type="search"
            placeholder="Search"
            className=" mr-sm-2 w-50"
            onChange={handleSearch}
          />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
