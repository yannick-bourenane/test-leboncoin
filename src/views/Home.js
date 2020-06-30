import React from "react";
import { Container, Section } from "react-bulma-components";
import Header from "../components/partials/Header";
import MessagesList from "../components/MessagesList";
const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <Section>
          <MessagesList />
        </Section>
      </Container>
    </>
  );
};

export default Home;
