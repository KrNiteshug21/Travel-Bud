import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="space-y-4 p-4 rounded-md w-[300px]">
      <h2 className="font-semibold text-2xl text-black/90 tracking-wide">
        {data.title}
      </h2>
      <p className="text-gray-400 text-lg">{data.desc}</p>
    </div>
  );
};

export default Cards;
