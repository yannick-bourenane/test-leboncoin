import React from "react";
import { Container, Section } from "react-bulma-components";
import Header from "../components/partials/Header";
import AddMessageForm from "../components/AddMessageForm";

const NewMessage = () => {
  return (
    <Container>
      <Header />
      <Section>
        <AddMessageForm />
      </Section>
    </Container>
  );
};

export default NewMessage;
