import React, { useCallback, useState } from "react";
import UseCallbackHookHeader from "./UseCallbackHookHeader";

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);

  // Function to update the count
  const updateCount = () => {
    setCount((prev) => prev + 1);
  };

  // Memoized function using useCallback
  const logMessage = useCallback(() => {
    console.log("Logging message from useCallback Hook");
  }, []);

  return (
    <div>
      {/* Render UseCallback Header */}
      <div>
        <div className="w-3/4 p-4 mx-auto my-8 text-center border border-teal-400 rounded-xl bg-teal-50 drop-shadow-2xl">
          <div className="text-4xl font-bold text-teal-600">
            useCallback Hook
          </div>

          <div className="my-6">
            {" "}
            {/* Using useCallback alone does not prevent child components from re-rendering. To achieve this, you should also use React.memo to memoize the child component. This way, the child component will only re-render if its props change. */}
            <UseCallbackHookHeader logMessage={logMessage} />
          </div>

          <div className="my-6">
            <p>
              <span className="text-xl font-bold">Counter : </span>
              <span className="px-2 py-1 mx-2 font-bold text-white bg-green-600 rounded-lg">
                {count}
              </span>{" "}
            </p>
          </div>

          <div>
            <button
              className="px-2 py-1 font-semibold text-white bg-green-600 border border-green-700 rounded-lg drop-shadow-lg hover:opacity-80"
              onClick={updateCount}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCallbackHook;
