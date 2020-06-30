import React from "react";
import { Container } from "react-bulma-components";
import Header from "../components/partials/Header";
import MessagesList from "../components/MessagesList";
const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <MessagesList />
      </Container>
    </>
  );
};

export default Home;
