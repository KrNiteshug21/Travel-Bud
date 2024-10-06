"use client";
import styles from "./page.module.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="px-2 text-center">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-6xl"
        >
          Find Travel Buddies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          className="mx-auto w-full md:w-1/2 text-2xl text-center break-words"
        >
          Explore the world on a budget—share your journey, split the cost, and
          make memories with a travel buddy!
        </motion.p>
      </div>
    </header>
  );
};

export default Header;
