import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const UseContextFooter = () => {
  const { phone, name } = useContext(AppContext);

  return (
    <div>
      <div className="my-6 text-center bg-cyan-50 border border-cyan-500 rounded-xl shadow-xl p-4 w-3/4 mx-auto">
        <div className="text-4xl font-bold text-cyan-600 mb-4">
          useContext Hook
        </div>

        <div>
          <p className="font-semibold py-2 text-lg">Footer Phone : {phone}</p>
          <p className="font-semibold py-2 text-lg">Footer Name : {name}</p>
        </div>
      </div>
    </div>
  );
};

export default UseContextFooter;
