import React, { useState } from "react";

const IncreDecre = () => {
  const [count, setCount] = useState(1);
  const [error, setError] = useState("");

  const countAction = (val) => {
    if (val === "incr") {
      setCount(count + 1);
      setError(""); // Clear error when incrementing
    } else if (val === "decr") {
      if (count <= 1) {
        return setError("Count can not be zero");
      } else {
        setError(""); // Clear error if not zero
      }
      setCount(count - 1);
    }
  };

  return (
    <div className="w-1/2 p-4 mx-auto my-8 border rounded-lg shadow-xl bg-amber-100 border-amber-800">
      <div className="flex justify-center gap-8 align-middle place-content-center">
        <button
          onClick={() => countAction("decr")}
          className="px-2 py-1 font-bold bg-red-200 rounded-lg drop-shadow-lg"
        >
          -
        </button>
        <p className="px-2 py-1 bg-purple-100 border rounded-lg drop-shadow-lg">
          Count : {count}
        </p>
        <button
          onClick={() => countAction("incr")}
          className="px-2 py-1 font-bold bg-green-200 rounded-lg drop-shadow-lg"
        >
          +
        </button>
      </div>
      {error && (
        <p className="mt-5 text-sm italic text-center text-red-400">{error}</p>
      )}
    </div>
  );
};

export default IncreDecre;
