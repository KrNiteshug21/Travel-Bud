import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CardAnimation = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    once: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : null}
      transition={{ duration: 0.5, ease: "easeOut" }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default CardAnimation;
