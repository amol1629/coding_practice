import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(credentials);
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
              value={credentials.userName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password" // Changed input type to password for better security
              className="w-1/2 p-2 my-3 border border-purple-500 rounded-xl"
              placeholder="Enter your password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
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
