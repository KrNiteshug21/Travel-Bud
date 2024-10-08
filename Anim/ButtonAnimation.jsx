import React from "react";
import { motion } from "framer-motion";

const ButtonAnimation = ({
  type = "button",
  text,
  clickFunction = null,
  className = null,
}) => {
  return (
    <motion.button
      type={type}
      initial={{ scale: 1 }}
      whileHover={{ scale: 0.93 }}
      whileTap={{ scale: 1.1 }}
      onClick={clickFunction}
      className={className}
    >
      {text}
    </motion.button>
  );
};

export default ButtonAnimation;
