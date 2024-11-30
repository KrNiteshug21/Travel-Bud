import React from "react";
import { motion } from "framer-motion";

const Cards = ({ data, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : null}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
      className="flex-1 space-y-4 hover:shadow-xl p-4 rounded-md text-center transition-all cursor-pointer"
    >
      {data.icon}
      <h2 className="font-semibold text-slate-800 text-xl tracking-wide">
        {data.title}
      </h2>
      <p className="text-gray-600 text-lg">{data.desc}</p>
    </motion.div>
  );
};

export default Cards;
