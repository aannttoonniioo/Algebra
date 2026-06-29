import React from "react";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class UserForm extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Form.Label>Github username:</Form.Label>
          <FormControl
            size="lg"
            type="text"
            placeholder="username"
          ></FormControl>
          <Button variant="Dark" size="lg">
            Search
          </Button>
        </Form>
      </>
    );
  }
}
export default UserForm;
