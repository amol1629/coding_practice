import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      {/* <AddTodo /> */}
      <TodoItems />
    </>
  );
}

export default App;
