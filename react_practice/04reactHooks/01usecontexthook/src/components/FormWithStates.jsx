import React, { useState } from "react";

const FormWithStates = () => {
  // State for form data
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });

  // Handle onChange Method :
  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit method
  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data : ", credentials);

    // Reset the form after successful login
    setCredentials({ userName: "", password: "" });
  };
  return (
    <div className="p-4 my-8 border shadow-xl rounded-xl bg-green-50">
      <div>
        <form onSubmit={handleFormSubmit}>
          <div className="my-4">
            <p className="text-3xl font-bold text-green-500">
              Dummy Form With States
            </p>
          </div>

          <div>
            <input
              type="text"
              name="userName"
              value={credentials.userName}
              onChange={handleChange}
              className="w-1/2 p-2 my-2 border border-green-600 rounded-2xl"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-1/2 p-2 my-2 border border-green-600 rounded-2xl"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="my-4">
            <button
              className="px-6 py-2 text-white transition-all duration-300 ease-in-out bg-green-600 rounded-2xl hover:opacity-80"
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

export default FormWithStates;
