import React from "react";
import CardAnimation from "@/Anim/CardAnimation";

const Cards = ({ data }) => {
  return (
    <CardAnimation className="flex-1 space-y-4 shadow-xl p-4 rounded-md text-center transition-all cursor-pointer">
      {data.icon}
      <h2 className="font-semibold text-slate-800 text-xl tracking-wide">
        {data.title}
      </h2>
      <p className="text-gray-600 text-lg">{data.desc}</p>
    </CardAnimation>
  );
};

export default Cards;
