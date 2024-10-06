import { motion } from "framer-motion";

export const TextRevealAnimation = ({ text, isInView }) => {
  return (
    <>
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
    </>
  );
};
