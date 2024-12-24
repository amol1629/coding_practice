import "./App.css";
import Header from "./components/Header";
import IncreDecre from "./components/IncreDecre";
import NewCounter from "./components/NewCounter";
import UseCallbackHook from "./components/UseCallbackHook";
import UseEffectHook from "./components/UseEffectHook";
import UseMemoHook from "./components/UseMemoHook";
import UseRefHook from "./components/UseRefHook";
import UseStateHook from "./components/UseStateHook";

function App() {
  return (
    <div>
      <Header />
      <UseStateHook />
      <IncreDecre />
      <NewCounter />
      <UseEffectHook />
      <UseRefHook />
      <UseMemoHook />
      <UseCallbackHook />
    </div>
  );
}

export default App;
