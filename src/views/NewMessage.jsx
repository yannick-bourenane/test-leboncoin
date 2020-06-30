import React from "react";
import { Container, Section } from "react-bulma-components";
import Header from "../components/partials/Header";
import AddMessageForm from "../components/AddMessageForm";

const NewMessage = ({ postMessages }) => {
  return (
    <Container>
      <Header />
      <Section>
        <AddMessageForm postMessages={postMessages} />
      </Section>
    </Container>
  );
};

export default NewMessage;
