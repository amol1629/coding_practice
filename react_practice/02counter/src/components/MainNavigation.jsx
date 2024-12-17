import { NavLink } from "react-router-dom";
import { navigationStyle } from "../utils/navigationStyle";

const MainNavigation = () => {
  return (
    <div>
      <div className="flex bg-purple-200 place-content-between">
        <div className="flex items-center w-full gap-2">
          <img
            src="https://www.shutterstock.com/image-vector/modern-vector-graphic-triangle-play-260nw-1960828870.jpg"
            alt=""
            className="w-16 h-16 p-1 rounded-full"
          />
          <p className="font-bold text-purple-800 text-md">
            The Koder's Kingdom
          </p>
        </div>
        <div className="flex items-center w-full gap-4 place-content-end me-12">
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

          <NavLink
            to="/counter"
            className={({ isActive }) => navigationStyle(isActive)}
          >
            Counter
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
