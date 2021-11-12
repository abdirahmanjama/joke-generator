import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = useState(0);
  const [joke, setJoke] = useState("");
  useEffect(() => {
    const fetchJoke = async () =>
      await fetch(`http://api.icndb.com/jokes/random`)
        .then((res) => res.json())
        .then((data) => {
          setJoke(data.value.joke);
        });

    fetchJoke();
  }, []);

  const handleClick = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    setJoke();
  };
  return (
    <div className="App">
      <h1>The Joke Generator</h1>
      <button onClick={handleClick}>Generate Joke</button>
      <h3>{joke}</h3>
    </div>
  );
}

export default App;
