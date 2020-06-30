import React, { useEffect, useState } from "react";
const axios = require("axios");

const MessagesList = () => {
  const [msgList, setMsgList] = useState([]);

  const getMessages = () =>
    axios.get("/messages.json").then((res) => setMsgList(res.data));

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <section>
      {msgList.length &&
        msgList.map((msg) => <article key={msg.id}>{msg.content}</article>)}
    </section>
  );
};

export default MessagesList;
