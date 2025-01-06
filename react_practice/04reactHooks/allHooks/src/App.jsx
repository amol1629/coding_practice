import "./App.css";
import Demo from "./components/Demo";
import Header from "./components/Header";
import IncreDecre from "./components/IncreDecre";
import NewCounter from "./components/NewCounter";
import ThemeChange from "./components/ThemeChange.jsx";
import UseCallbackHook from "./components/UseCallbackHook";
import UseContextFooter from "./components/UseContextFooter";
import UseEffectHook from "./components/UseEffectHook";
import UseMemoHook from "./components/UseMemoHook";
import UseReducerHook from "./components/UseReducerHook.jsx";
import UseRefHook from "./components/UseRefHook";
import UseStateHook from "./components/UseStateHook";
import ContextProvider from "./context/ContextProvider.jsx";
import ThemeContextProvider from "./context/ThemeContextProvider.jsx";

function App() {
  return (
    <div>
      <Header />
      <Demo />
      <UseStateHook />
      <IncreDecre />
      <NewCounter />
      <UseEffectHook />
      <UseRefHook />
      <UseMemoHook />
      <UseCallbackHook />
      <UseReducerHook />

      <ThemeContextProvider>
        <ThemeChange />
      </ThemeContextProvider>

      <ContextProvider>
        <UseContextFooter />
      </ContextProvider>
    </div>
  );
}

export default App;
