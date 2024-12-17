import React, { useState } from "react";

const UseStateHook = () => {
  const [color, setColor] = useState(""); // For dynamic background color
  const [colorInput, setColorInput] = useState(""); // For input field
  const [error, setError] = useState(""); // For input validation

  const changeUIColor = () => {
    if (!colorInput.trim()) {
      setError("Color name cannot be empty!");
      return;
    }
    setError(""); // Clear previous error

    // Check if the color is valid (optional validation)
    setColor(colorInput.trim().toLowerCase());
  };

  return (
    <div className="text-center w-1/2 mx-auto my-8">
      {/* Background Color Box */}
      <div
        className={`rounded-xl shadow-lg p-4 bg-[${color}]`}
        style={{ backgroundColor: color || "lightpink" }}
      >
        <h1 className="text-4xl font-bold text-white">
          useState React Hooks {color ? `- ${color}` : ""}
        </h1>
      </div>

      {/* Input and Button Section */}
      <div className="my-8 flex place-content-center gap-5">
        <div>
          <input
            type="text"
            name="colorName"
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && changeUIColor()}
            placeholder="Enter color name"
            aria-label="Enter color name"
            className="border border-violet-300 rounded-xl outline-none px-4 py-1"
          />
          {error && <p className="text-red-500 italic text-sm mt-2">{error}</p>}
        </div>

        <div>
          <button
            className="bg-[#1ba326] text-green-50 py-2 px-8 rounded-3xl font-semibold hover:bg-[#2dad53]"
            onClick={changeUIColor}
            aria-label="Change UI Color"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseStateHook;
