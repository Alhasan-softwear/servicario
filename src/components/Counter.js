import React, { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  decrement = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };
  render() {
    const { title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.increment}>Increment</button>
        <div className="counter">{this.state.count}</div>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
