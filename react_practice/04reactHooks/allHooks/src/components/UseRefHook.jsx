import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [value, setValue] = useState(0);
  const renderedCount = useRef(0);

  // Use of useRef to access the DOM element
  const inputElem = useRef();

  const changeButtonClicked = () => {
    // Access and modify the DOM element directly
    if (inputElem.current) {
      inputElem.current.value = "Adam";
      inputElem.current.style.background = "cyan";
    }
    console.log("DOM Element : ", inputElem.current);
  };

  useEffect(() => {
    renderedCount.current = renderedCount.current + 1;
  });

  const increaseValue = () => {
    setValue((prev) => prev + 1);
  };

  const decreaseValue = () => {
    setValue((prev) => {
      if (value <= 0) return prev;
      return prev - 1;
    });
  };
  return (
    <div>
      <div className="w-1/2 p-4 mx-auto my-8 text-center border border-blue-400 rounded-xl bg-blue-50 drop-shadow-2xl">
        <div className="text-4xl font-bold text-blue-600">useRef Hook</div>

        <div className="my-6">
          <div className="flex justify-center gap-8 align-middle place-content-center">
            <button
              className="px-2 py-1 text-red-700 bg-red-200 border border-red-700 rounded-lg drop-shadow-lg hover:opacity-80"
              onClick={decreaseValue}
            >
              Decrease by 1
            </button>
            <p className="px-2 py-1 bg-purple-100 border rounded-lg drop-shadow-lg">
              Value : {value}
            </p>
            <button
              className="px-2 py-1 text-green-700 bg-green-200 border border-green-700 rounded-lg drop-shadow-lg hover:opacity-80"
              onClick={increaseValue}
            >
              Increase by 1
            </button>
          </div>
        </div>

        <div>
          <p>
            Counter Component is rendered{" "}
            <span className="px-2 py-1 font-bold text-white bg-pink-600 rounded-lg">
              {renderedCount.current}
            </span>{" "}
            times.
          </p>
        </div>

        {/* Use of useRef Hook to modify the DOM element */}
        <div className="my-7">
          <input
            className="px-2 py-1 border border-green-500 rounded-lg me-4"
            type="text"
            ref={inputElem}
            id="name"
            name="name"
            placeholder="Please enter your name"
          />
          <button
            className="px-2 py-1 text-blue-700 bg-cyan-100 border border-cyan-700 rounded-lg drop-shadow-lg hover:opacity-80"
            onClick={changeButtonClicked}
          >
            Change DOM
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseRefHook;
