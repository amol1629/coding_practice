import { useState } from "react";

const NewCounter = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount((prev) => prev + 1);
  };

  console.log("Count : ", count);
  return (
    <div>
      <div className="w-1/2 p-4 mx-auto my-8 text-center border border-purple-400 rounded-xl bg-purple-50 drop-shadow-2xl">
        <p>Counter : {count}</p>
        <button
          className="px-4 py-1 my-4 text-green-600 transition-all duration-300 ease-in-out bg-green-100 border border-green-600 rounded-xl hover:bg-green-600 hover:text-white"
          onClick={updateCount}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NewCounter;
