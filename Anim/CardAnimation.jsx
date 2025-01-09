import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CardAnimation = ({
  children,
  className = "",
  triggerHoverAnimation = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  return (
    <motion.div
      className={className}
      initial={{ y: -30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      whileHover={triggerHoverAnimation && { scale: 1.05 }}
      layout={true}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default CardAnimation;
