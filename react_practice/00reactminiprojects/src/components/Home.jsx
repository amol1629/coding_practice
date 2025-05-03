import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1 className="bg-pink-200 p-4 rounded-xl shadow-xl ">
        This is Basics of Redux
      </h1>

      <div className="my-8">
        <p>Count : {count} </p>
        <button
          className="px-4 border rounded-lg bg-gray-100"
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Home;
