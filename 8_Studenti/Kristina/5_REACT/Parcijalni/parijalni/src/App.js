import { useState } from "react";
import "./App.css";
import { UserForm, GithubRepoos, GithubUser } from "./components";
import Button from "react-bootstrap/Button";
function App() {
  const { user, setUser } = useState(null);

  if (!user) {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }

  return (
    <div className="App">
      <GithubUser />
      <GithubRepoos />
    </div>
  );
}

export default App;
