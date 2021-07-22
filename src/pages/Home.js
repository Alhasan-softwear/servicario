import React, { useState, useEffect } from "react";
import "./Home.css";

// function HomePage() {
//   const [message, setMessage] = useState("supper message");
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     debugger;
//     setTimeout(() => {
//       setMessage("update is here oh wat can you do oooooo");
//     }, 1000);
//   }, []);
//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };
//   return (
//     <div className="container">
//       <h1>hey</h1>
//       <p>{message}</p>
//       <button onClick={increment}>Increment</button>
//       <div className="counter">{count}</div>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
//}
class HomePage extends React.Component {
  state = {
    message: "Super Message",
    count: 0,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ message: "I am new message" });
    }, 1000);
  }
  increment = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  decrement = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };
  render() {
    const { message } = this.state;
    return (
      <div className="container">
        <h1>Hey</h1>
        <p>{message}</p>
        <div className="container">
          <h1>hey</h1>
          <p>{message}</p>
          <button onClick={this.increment}>Increment</button>
          <div className="counter">{this.state.count}</div>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}
export default HomePage;
