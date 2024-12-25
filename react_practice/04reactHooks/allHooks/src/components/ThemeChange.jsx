import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeChange = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  console.log("Theme : ", theme);
  return (
    <div
      className={` ${
        theme === "dark" ? "bg-black text-white" : "bg-fuchsia-100"
      }  w-3/4 p-4 mx-auto my-8 text-center border border-fuchsia-600 rounded-xl drop-shadow-2xl`}
    >
      <div className="text-4xl font-bold text-fuchsia-600 ">
        Change Theme using useContext Hook
      </div>

      <div className="my-4">
        <p className="mb-4">Theme : {theme}</p>{" "}
        <button
          className={`px-4 py-2 font-semibold text-white rounded-lg drop-shadow-lg hover:opacity-80 ${
            theme === "dark"
              ? "bg-gray-800 border-gray-70 border border-white0"
              : "bg-green-600 border-green-600"
          }`}
          onClick={handleChangeTheme}
        >
          {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default ThemeChange;
