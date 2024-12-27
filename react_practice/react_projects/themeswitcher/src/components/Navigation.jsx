import ThemeButton from "./ThemeButton";

const Navigation = () => {
  return (
    <nav className="p-4 bg-pink-100 shadow-md">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/011/883/284/small/colorful-star-logo-good-for-technology-logo-vintech-logo-company-logo-browser-logo-dummy-logo-bussiness-logo-free-vector.jpg"
            alt="Lorem Ipsum Logo"
            className="w-12 h-12 border border-black rounded-full"
          />
          <p className="text-xl font-bold text-pink-600">Theme Switcher</p>
        </div>

        {/* Hamburger Menu */}
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 text-pink-600 border border-pink-600 rounded hover:text-pink-800 hover:border-pink-800">
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto 
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <a
              href="#home"
              className="block px-4 py-2 mx-2 mt-4 text-white bg-pink-500 lg:inline-block lg:mt-0 hover:opacity-75 rounded-xl"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-2 mx-2 mt-4 text-white bg-pink-500 lg:inline-block lg:mt-0 hover:opacity-75 rounded-xl"
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 mx-2 mt-4 text-white bg-pink-500 lg:inline-block lg:mt-0 hover:opacity-75 rounded-xl"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Theme Button */}
        <div className="mt-4 lg:mt-0">
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
