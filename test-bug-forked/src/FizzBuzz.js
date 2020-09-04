/***
 * Counting incrementally, any number divisable by 3
 * is replaced by the word "fizz",
 * and any number divisible by five
 * with the word "buzz".
 * Result: two buttons (increment and decrement)
 * Show the result on the screen
 */

import React from "react";

export default class FizzBuzz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  fizzbuzz(num) {
    if (num % 5 == 0 && num % 3 == 0) {
      return (
        <div>FizzBuzz</div>
      );
    } else if (num % 5 == 0) {
      return (
        <div>buzz</div>
      );
    } else if (num % 3 == 0) {
      return (
        <div>fizz</div>
      );
    }
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleDecrement() {
    this.setState({
      count: this.state.count - 1
    });
  }


  render() {

    const fb = this.fizzbuzz(this.state.count);

    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={e => this.handleIncrement(e)}>+</button>
        <button onClick={e => this.handleDecrement(e)}>-</button>
        {fb}
      </>
    )
  }
}
