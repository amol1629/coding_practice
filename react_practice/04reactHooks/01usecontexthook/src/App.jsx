import "./App.css";
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
      </UserContextProvider>
    </div>
  );
}

export default App;
