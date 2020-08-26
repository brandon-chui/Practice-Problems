import React from "react";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }

  render() {
    const lists = ["one", "two", "three"];

    return (
      <div>
        <p>Hello {this.state.name}</p>
        <ul>
          {lists.map((listNo, index) => (
            <li>{listNo}</li>
          ))}
        </ul>
      </div>
    );
  }
}
