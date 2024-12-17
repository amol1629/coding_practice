import React from "react";
import { NavLink } from "react-router-dom";
import { navigationStyle } from "../utils/navigationStyle";

const MainNavigation = () => {
  return (
    <div>
      <div className="flex place-content-between bg-purple-200">
        <div className="flex items-center gap-2 w-full">
          <img
            src="https://www.shutterstock.com/image-vector/modern-vector-graphic-triangle-play-260nw-1960828870.jpg"
            alt=""
            className="h-16 w-16 p-1 rounded-full"
          />
          <p className="text-md text-purple-800 font-bold">The Koder's Kingdom</p>
        </div>
        <div className="flex place-content-end gap-4 items-center w-full me-12">
          <NavLink
            to="/"
            className={({ isActive }) => navigationStyle(isActive)}
          >
            Home
          </NavLink>

          <NavLink
            to="/card"
            className={({ isActive }) => navigationStyle(isActive)}
          >
            Card
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
