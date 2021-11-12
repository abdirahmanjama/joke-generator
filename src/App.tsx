import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>The Joke Generator</h1>
      <button>Generate Joke</button>
    </div>
  );
}

export default App;
