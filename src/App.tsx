import logo from "./logo.svg";
import "./App.css";
import useRandomJoke from "./useRandomJoke";
import React, { useState } from "react";

function App() {
  const joke = useRandomJoke();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="App">
      <h1>The Joke Generator</h1>

      <form>
        <input
          placeholder="first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </form>
      <h3>{joke}</h3>
    </div>
  );
}

export default App;
