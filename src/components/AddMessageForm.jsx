import React from "react";
import { Form } from "react-bulma-components";

const AddMessageForm = () => {
  return (
    <div className="form">
      <Form.Field>
        <Form.Label>Message</Form.Label>
        <Form.Control>
          <Form.Textarea placeholder="Your message" />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Control>
          <Form.Checkbox>This is a private message</Form.Checkbox>
        </Form.Control>
      </Form.Field>
    </div>
  );
};

export default AddMessageForm;
