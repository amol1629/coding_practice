import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();

    // Extract form data directly to avoid unnecessary state
    const formData = new FormData(e.target);
    const credentials = {
      userName: formData.get("userName"),
      password: formData.get("password"),
    };

    console.log(credentials);
    setUser(credentials); // Update the context with the user data

    e.target.reset(); // Clear the form fields directly
  };

  return (
    <div>
      <div className="p-4 my-8 border shadow-xl rounded-xl bg-slate-50">
        <form onSubmit={handleLogin}>
          <div className="my-4">
            <p className="text-3xl font-bold text-blue-500">User Login</p>
          </div>
          <div>
            <input
              type="text"
              className="w-1/2 p-2 my-3 border border-purple-500 rounded-xl"
              placeholder="Enter your name"
              name="userName"
              required
            />
          </div>
          <div>
            <input
              type="password"
              className="w-1/2 p-2 my-3 border border-purple-500 rounded-xl"
              placeholder="Enter your password"
              name="password"
              required
            />
          </div>
          <div className="my-4">
            <button
              className="px-6 py-2 text-white transition-all duration-300 ease-in-out bg-green-600 rounded-xl hover:opacity-80"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
