import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CardAnimation = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-300px",
    once: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : null}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default CardAnimation;
