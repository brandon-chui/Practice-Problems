import React from "react";
import { render } from "react-dom";
import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";
import DelayedCount from "./DelayedCount";
import Palindrome from "./Palindrome";
import FizzBuzz from "./FizzBuzz";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyComponent name="Test" />
        <MyComponent2 />
        <DelayedCount />
        <Palindrome />
        <FizzBuzz />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
