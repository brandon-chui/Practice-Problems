import React from "react";

export default class MyComponent2 extends React.Component {
  name = "MyComponent";

  constructor(props) {
    super(props);

    this.handleClick4 = this.handleClick4.bind(this);
  }

  // this doesn't work because handleClick is not binded to the constructor - therefore it does not know what this.name
  // binding it will make it refer to the component
  handleClick1() {
    alert(this.name);
  }

  // () => this.handleClick2() is equivalent to this.handleClick2.bind(this) 
  // without the () after this.handleClick2, the function will not run.
  handleClick2() {
    alert(this.name);
  }

  // arrow functions have the same context as the function that creates it, therefore has access to this.name
  handleClick3 = () => {
    alert(this.name);
  };

  // normal bound function.
  handleClick4() {
    alert(this.name);
  }

  render() {
    return (
      <div>
        {/* Need to bind this.handleClick1 so it will have access to this.name */}
        <button onClick={this.handleClick1}>click 1</button> 
        {/* Need to add () after handleClick2 in order for the function to run when clicked. Not efficient because a new function is created every rerender */}
        <button onClick={() => this.handleClick2()}>click 2</button>
        {/* Works as is because handleClick3 is an arrow function and is already binded to the context of the function */}
        <button onClick={this.handleClick3}>click 3</button>
        {/* Normal way of doing it, handleClick4 is bound in the constructor. */}
        <button onClick={this.handleClick4}>click 4</button>
      </div>
    );
  }
}
