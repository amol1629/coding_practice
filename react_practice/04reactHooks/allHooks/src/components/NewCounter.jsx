import { useState } from "react";

const NewCounter = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    // The first example uses a functional update to set the new state. This ensures that you always get the latest state value, which is particularly important when state updates are asynchronous.
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div className="w-3/4 p-4 mx-auto my-8 text-center border border-purple-400 rounded-xl bg-purple-50 drop-shadow-2xl">
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
