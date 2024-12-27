import React from "react";

const FormUsingFormData = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const credentials = {
      userName: formData.get("userName"),
      password: formData.get("password"),
    };

    console.log("Demo Form Data : ", credentials);

    e.target.reset();
  };
  return (
    <div className="p-4 my-8 border shadow-xl rounded-xl bg-orange-50">
      <div>
        <form onSubmit={handleFormSubmit}>
          <div className="my-4">
            <p className="text-3xl font-bold text-orange-500">
              Dummy Form Using FormData
            </p>
          </div>

          <div>
            <input
              type="text"
              name="userName"
              className="w-1/2 p-2 my-2 border border-orange-600 rounded-2xl"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              className="w-1/2 p-2 my-2 border border-orange-600 rounded-2xl"
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

export default FormUsingFormData;
