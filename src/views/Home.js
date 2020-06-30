import React from "react";
import { Container, Section, Notification } from "react-bulma-components";
import Header from "../components/partials/Header";
import MessagesList from "../components/MessagesList";

const Home = ({ msgList, alert }) => {
  return (
    <>
      <Container>
        <Header />
        <Section>
          {alert && <Notification>{alert}</Notification>}
          <MessagesList msgList={msgList} />
        </Section>
      </Container>
    </>
  );
};

export default Home;
