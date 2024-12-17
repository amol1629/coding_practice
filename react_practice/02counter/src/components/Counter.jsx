import React from "react";

const Counter = () => {
  return (
    <div className="flex items-center justify-center h-[85vh] bg-gray-100">
      <div className="flex gap-4 p-6 rounded-xl bg-violet-100">
        <div>
          <button>-</button>
        </div>

        <div className="p-2 bg-orange-300 rounded-xl">
          <p>Count : 0</p>
        </div>
        <div>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
