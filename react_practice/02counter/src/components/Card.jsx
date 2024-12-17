import React from "react";

const Card = ({ cardImage, cardTitle, cardDescription }) => (
  <div className="border  bg-slate-50 shadow-lg rounded-2xl  w-1/4 px-6 py-2 my-4 hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-white hover:border-purple-300 cursor-pointer">
    <img
      src={cardImage}
      alt={cardTitle}
      className=" h-40 m-auto w-full p-2 text-center rounded-2xl shadow"
    />
    <p className="font-bold text-xl text-center my-4">{cardTitle}</p>
    <p className="mb-2 text-balance text-center">{cardDescription}</p>
  </div>
);

export default Card;
