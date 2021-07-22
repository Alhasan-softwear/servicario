import React, { Component } from "react";
import "./Home.css";
import Counter from "../components/Counter";
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
class HomePage extends Component {
  state = {
    message: "Super Message",
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
          <Counter />
        </div>
      </div>
    );
  }
}
export default HomePage;
