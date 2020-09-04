import React, { Component } from "react";
import ReactDOM from "react-dom";

/*
  Use the following api to get a random dad joke https://icanhazdadjoke.com/api.

  Display the joke in any format and add two buttons:
  1) Like button. The like button adds the joke to a list of liked jokes. 
     Dismmiss the current joke and get a new one. 
  2) Dislike button. Same as the like button but without adding the joke to the list.
*/

// Tips
// You can add any dependency by importing it and cliking on "Add X as dependency"

import "./styles.css";
import axios from "axios";

function App() {

  const [joke, setJoke] = React.useState('');
  const [likedJokes, setLikedJokes] = React.useState([]);


  React.useEffect(() => {
    getJoke();
  }, []);

  const handleLike = () => {
    setLikedJokes([...likedJokes, joke]);
    getJoke();
  }

  const handleDislike = () => {
    getJoke();
  }

  const getJoke = () => {
    async function fetchJoke() {
      const result = await axios("https://icanhazdadjoke.com/", {
        headers: { Accept: "text/plain" }
      });
      setJoke(result.data)
    }

    fetchJoke();
  }

  return (
    <div>
      <h1>Dad Jokes</h1>
      <p>{joke}</p>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
      <ul>
      {likedJokes.map((liked, id)=> {
        return <li key={id}>{liked}</li>
      })}
      </ul>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
