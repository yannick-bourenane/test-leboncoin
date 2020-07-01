import React from "react";
import { Container, Section, Heading } from "react-bulma-components";
import Header from "../components/partials/Header";
const NotFound = () => {
  return (
    <Container>
      <Header />
      <Section>
        <Heading>404 - Page not found !</Heading>
      </Section>
    </Container>
  );
};

export default NotFound;
