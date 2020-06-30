import React, { useState } from "react";
import { Form } from "react-bulma-components";
import { Link } from "react-router-dom";

const AddMessageForm = ({ postMessages }) => {
  const [msgObj, setMsgObj] = useState({ isPrivate: false });

  return (
    <div className="form">
      <Form.Field>
        <Form.Label>Message</Form.Label>
        <Form.Control>
          <Form.Textarea
            value={msgObj.content}
            onChange={(e) => setMsgObj({ ...msgObj, content: e.target.value })}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Control>
          <Form.Checkbox
            onChange={(e) =>
              setMsgObj({ ...msgObj, isPrivate: !msgObj.isPrivate })
            }
          >
            Message privé
          </Form.Checkbox>
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Control>
          <Link to="/" onClick={() => postMessages(msgObj)}>
            Envoyer
          </Link>
          {/* <Button onClick={() => postMessages(msgObj)}>Envoyer</Button> */}
        </Form.Control>
      </Form.Field>
    </div>
  );
};

export default AddMessageForm;
