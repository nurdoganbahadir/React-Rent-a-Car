import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import data from "../helper/data";
import { useState } from "react";

const HomePage = () => {
  const [search, setSearch] = useState("");

  const filteredCars = data.filter((car) =>
    car.brand.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredCars);
  return (
    <>
      <Header setSearch={setSearch} />
      <Container>
        <Row className="my-5 g-4">
          {filteredCars.map((item) => (
            <Main item={item} key={item.id} />
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
