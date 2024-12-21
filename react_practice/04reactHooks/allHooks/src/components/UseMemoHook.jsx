import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [show, setShow] = useState(true);

  const updateNumber = () => {
    setNumber((prev) => prev + 1);
  };

  const clickMeButton = () => {
    setShow((prevShow) => !prevShow);
  };

  const getNumber = (num) => {
    console.log("Computing the number:", num);
    // Simulate an expensive calculation
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    for (let i = 0; i <= 1000000000; i++) {} // Added delay
    return factorial;
  };

  // Using useMemo ensures that getNumber is only called when number changes, which optimizes performance by preventing unnecessary recalculations. In scenarios where the computation is heavy or the component re-renders frequently, useMemo can significantly improve efficiency and responsiveness.
  const currentNumber = useMemo(() => {
    return getNumber(number);
  }, [number]);

  return (
    <div>
      <div className="w-1/2 p-4 mx-auto my-8 text-center border border-orange-400 rounded-xl bg-orange-50 drop-shadow-2xl">
        <div className="text-4xl font-bold text-orange-600">useMemo Hook</div>

        <div className="my-6">
          <button
            className="px-2 py-1 text-pink-700 bg-pink-100 border border-pink-700 rounded-lg drop-shadow-lg hover:opacity-80"
            onClick={updateNumber}
          >
            Update
          </button>
        </div>
        <div className="my-6">
          <p>
            Counter Component is rendered{" "}
            <span className="px-2 py-1 font-bold text-white bg-green-600 rounded-lg">
              {currentNumber}
            </span>{" "}
            times.
          </p>
        </div>

        <div>
          <button
            className="px-2 py-1 text-pink-700 bg-pink-100 border border-pink-700 rounded-lg drop-shadow-lg hover:opacity-80"
            onClick={clickMeButton}
          >
            {show ? "Please Click Me" : "You have clicked me"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseMemoHook;
