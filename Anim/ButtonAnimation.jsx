import React from "react";
import { motion } from "framer-motion";

const ButtonAnimation = ({
  type = "button",
  text,
  clickFunction = null,
  className = null,
  disabled = false,
}) => {
  return (
    <motion.button
      type={type}
      initial={{ scale: 1 }}
      whileHover={disabled ? null : { scale: 0.93 }}
      whileTap={disabled ? null : { scale: 1.1 }}
      onClick={clickFunction}
      className={className}
      disabled={disabled}
    >
      {text}
    </motion.button>
  );
};

export default ButtonAnimation;
