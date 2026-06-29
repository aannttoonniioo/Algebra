import React from "react";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class UserForm extends React.Component {
  state = {
    userName: "",
  };

  handleuserChange = (event) => {
    const userName = event.target.value;
    this.setState({ userName: userName });
  };

  handleUserSelected = (event) => {
    event.preventDefault();
    const { setUser } = this.props;
    const { userName } = this.state;
    setUser(userName);
  };

  render() {
    const { userName } = this.state;

    return (
      <>
        <form onSubmit={this.handleUserSelected}>
          <div style={styles.container}>
            <label htmlFor="name" style={styles.label}>
              Github username:
            </label>

            <br />

            <input
              name="name"
              style={styles.input}
              placeholder="e.g. Facebook"
              value={userName}
              onChange={this.handleuserChange}
            />
            <button style={styles.button}>GO!</button>
          </div>
        </form>
      </>
    );
  }
}
export default UserForm;

const styles = {
  container: {
    paddingLeft: 50,
    paddingRight: 50,
  },

  label: {
    fontWeight: "bold",
  },
  input: {
    boxSiznig: "border-box",
    width: "100%",
    marginTop: 10,
  },

  button: {
    width: "100%",
    marginTop: 20,
  },
};
