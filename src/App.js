import React, { useEffect, useState } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";
const axios = require("axios");

const browserHistory = createBrowserHistory();

const App = () => {
  const [msgList, setMsgList] = useState([]);
  const [alert, setAlert] = useState("");

  const getMessages = () =>
    axios
      .get("http://localhost:3000/messages.json")
      .then((res) => setMsgList(res.data));

  async function postMessages(newMsg) {
    await setMsgList([
      ...msgList,
      {
        id: msgList.length + 1,
        sender: {
          id: 3,
          name: "Testeur",
        },
        time: Date.now(),
        ...newMsg,
      },
    ]);
    await setAlert("Message envoyé");
  }

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <Router history={browserHistory}>
      {msgList.length && console.log(msgList)}
      <Routes msgList={msgList} alert={alert} postMessages={postMessages} />
    </Router>
  );
};

export default App;
