import React from "react";
import CardAnimation from "@/Anim/CardAnimation";

const Cards = ({ data }) => {
  return (
    <CardAnimation className="flex-1 space-y-4 border-1 border-gray-300 shadow-sm hover:shadow-md p-4 rounded-md transition-all hover:translate-y-8 cursor-pointer">
      {data.icon}
      <h2 className="font-semibold text-slate-800 text-xl tracking-wide">
        {data.title}
      </h2>
      <p className="text-gray-600 text-justify text-lg">{data.desc}</p>
    </CardAnimation>
  );
};

export default Cards;
