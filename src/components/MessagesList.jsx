import React from "react";
import Moment from "react-moment";
import "moment/locale/fr";
import { Message } from "react-bulma-components";

const MessagesList = ({ msgList }) => {
  return (
    <>
      <section>
        {msgList.length &&
          msgList.map((msg) => (
            <Message key={msg.id}>
              <Message.Header>Message #{msg.id}</Message.Header>
              <Message.Body>
                {msg.isPrivate ? "Ce message est privé" : msg.content}
                <p className="has-text-right">
                  <i>
                    <Moment fromNow date={msg.time} /> -{" "}
                    <b>{msg.author.name}</b>
                  </i>
                </p>
              </Message.Body>
            </Message>
          ))}
      </section>
    </>
  );
};

export default MessagesList;
