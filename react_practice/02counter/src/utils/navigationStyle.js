import clsx from "clsx";

// Utility function for dynamic class handling
export const navigationStyle = (isActive) =>
  clsx(
    "rounded-lg px-6 py-2 text-purple-800 hover:bg-purple-600 hover:text-white transition-all duration-300 ease-in-out",
    {
      "font-bold border border-purple-700 text-white bg-purple-300 text-purple-900": isActive,
    }
  );
