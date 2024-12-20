import React from "react";

const UseMemoHook = () => {
  return (
    <div>
      <div className="w-1/2 p-4 mx-auto my-8 text-center border border-orange-400 rounded-xl bg-orange-50 drop-shadow-2xl">
        <div className="text-4xl font-bold text-orange-600">useMemo Hook</div>

        <div className="my-6">
          <p>
            Counter Component is rendered{" "}
            <span className="px-2 py-1 font-bold text-white bg-green-600 rounded-lg">
              0
            </span>{" "}
            times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseMemoHook;
