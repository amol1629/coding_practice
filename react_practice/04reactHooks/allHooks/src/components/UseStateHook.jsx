import { useState } from "react";

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
    setColorInput("");
  };

  return (
    <div className="w-1/2 mx-auto my-8 text-center">
      {/* Background Color Box */}
      <div
        className={`rounded-xl shadow-lg p-4 bg-[${color}]`}
        style={{ backgroundColor: color || "indigo" }}
      >
        <h1 className="text-4xl font-bold text-white">
          useState React Hooks {color ? `- ${color}` : ""}
        </h1>
      </div>

      {/* Input and Button Section */}
      <div className="flex gap-5 my-8 place-content-center">
        <div>
          <input
            type="text"
            name="colorName"
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && changeUIColor()}
            placeholder="Enter color name"
            aria-label="Enter color name"
            className="px-4 py-1 border outline-none border-violet-300 rounded-xl"
          />
          {error && <p className="mt-2 text-sm italic text-red-500">{error}</p>}
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
