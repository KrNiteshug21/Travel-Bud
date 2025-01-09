import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const TextRevealAnimation = ({ text, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  return (
    <h2 ref={ref} className={className}>
      {text.split("").map((char, index) => {
        return (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.25, delay: index * 0.07 }}
            key={index}
          >
            {char}
          </motion.span>
        );
      })}
    </h2>
  );
};
