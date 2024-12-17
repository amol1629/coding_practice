import React from "react";

const Home = () => {
  return (
    <div>
      <div className="relative">
        {/* Image Section */}
        <img
          src="https://cdn.pixabay.com/photo/2024/05/02/09/16/web-development-8734249_640.png"
          alt="Web Development"
          className="w-full h-screen object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col  gap-6 items-center justify-center w-3/4 mx-auto ">
          <h1 className="font-bold text-4xl italic bg-pink-200 px-6 rounded-xl py-2 text-purple-800 shandow-lg">
            The Koder's Kingdom
          </h1>
          <p className="text-xl md:text-2xl font-bold text-white bg-black bg-opacity-40 px-6 py-3 rounded-xl shadow-md">
            Welcome to <span className="italic underline text-purple-300">The Koder's Kingdom</span>, your one-stop
            destination to explore and learn about the world of programming!
            Whether you're a beginner stepping into coding or an experienced
            developer expanding your skill set, we've got you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
