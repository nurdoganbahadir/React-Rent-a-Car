import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import data from "../helper/data";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="my-5 g-4">
          {data.map((item) => (
            <Main item={item} />
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
