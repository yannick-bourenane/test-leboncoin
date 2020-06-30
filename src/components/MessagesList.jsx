import React, { useEffect, useState } from "react";
const axios = require("axios");

const MessagesList = () => {
  const [messagesList, setMessagesList] = useState([]);

  const getMessages = () =>
    axios.get("/messages.json").then((res) => setMessagesList(res.data));

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <section>
      {messagesList.length &&
        messagesList.map((msg) => (
          <article key={msg.id}>{msg.content}</article>
        ))}
    </section>
  );
};

export default MessagesList;
