import "./App.css";
import IncreDecre from "./components/IncreDecre";
import NewCounter from "./components/NewCounter";
import UseEffectHook from "./components/UseEffectHook";
import UseMemoHook from "./components/UseMemoHook";
import UseRefHook from "./components/UseRefHook";
import UseStateHook from "./components/UseStateHook";

function App() {
  return (
    <div>
      <UseStateHook />
      <IncreDecre />
      <NewCounter />
      <UseEffectHook />
      <UseRefHook />
      <UseMemoHook />
    </div>
  );
}

export default App;
