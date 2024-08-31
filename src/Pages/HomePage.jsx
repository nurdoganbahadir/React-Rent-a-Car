import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import Container from "react-bootstrap/Container";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Main />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
