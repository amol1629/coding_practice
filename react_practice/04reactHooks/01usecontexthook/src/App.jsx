import "./App.css";
import FormUsingFormData from "./components/FormUsingFormData";
import FormWithStates from "./components/FormWithStates";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <div>
      <UserContextProvider>
        <Home />
        <Login />
        <Profile />

        {/* These are the dummy forms for practice */}
        {/* <FormUsingFormData /> */}
        {/* <FormWithStates /> */}
      </UserContextProvider>
    </div>
  );
}

export default App;
