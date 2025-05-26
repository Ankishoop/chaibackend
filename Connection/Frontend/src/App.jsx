import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setjokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((resp) => {
        console.log(resp);
        setjokes(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Hello</h1>

      <p>Jokes: {jokes.length}</p>
      <ul>
        {jokes.map((joke) => {
          return (
            <li key={joke.id}>
              <span>{joke.type}</span>
              <p>{joke.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
