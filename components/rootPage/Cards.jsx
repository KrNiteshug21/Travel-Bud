import React from "react";
import { motion } from "framer-motion";

const Cards = ({ data, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 * data.id }}
      animate={isInView ? { opacity: 1, x: 0 } : null}
      transition={{ duration: 0.5, delay: 0.1 * data.id, ease: "easeInOut" }}
      className="space-y-4 hover:shadow-md p-4 rounded-md w-[300px] text-center cursor-pointer"
    >
      <h2 className="font-semibold text-2xl text-slate-800 tracking-wide">
        {data.title}
      </h2>
      <p className="text-gray-600 text-lg">{data.desc}</p>
    </motion.div>
  );
};

export default Cards;
