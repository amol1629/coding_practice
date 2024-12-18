import "./App.css";
import IncreDecre from "./components/IncreDecre";
import NewCounter from "./components/NewCounter";
import UseEffectHook from "./components/UseEffectHook";
import UseStateHook from "./components/UseStateHook";

function App() {
  return (
    <div>
      <UseStateHook />
      <IncreDecre />
      <NewCounter />
      <UseEffectHook />
    </div>
  );
}

export default App;
