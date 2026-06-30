import { useState } from "react";
import "./App.css";
import { UserForm, GithubRepoos, GithubUser } from "./components";

import { GithubApi } from "./services";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);

  function getData(userName) {
    Promise.all([
      GithubApi.fetchUser(userName),
      GithubApi.fetchUserRepos(userName),
    ]).then(([userResult, reposResult]) => {
      setUser(userResult);
      setRepos(reposResult);
      console.log(userResult);
    });
  }

  function handleResetUser() {
    setUser(null);
  }

  if (!user) {
    return (
      <div className="App">
        <UserForm setUser={getData} />
      </div>
    );
  }

  return (
    <div className="App">
      <GithubUser user={user} />
      <GithubRepoos repos={repos} />
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleResetUser}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

const styles = {
  button: {
    marginTop: 20,
    width: "100%",
  },
  buttonContainer: {
    textAlign: "center",
  },
};
