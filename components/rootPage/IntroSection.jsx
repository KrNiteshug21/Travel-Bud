"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px", once: true });

  return (
    <section
      ref={ref}
      className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 mx-auto my-10 px-10 py-16"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : null}
        transition={{ duration: 1 }}
        className="space-y-4 md:w-1/3 break-words leading-6"
      >
        <h2 className="font-semibold text-3xl tracking-wide">
          Real & verified travelers!
        </h2>
        <p className="text-gray-600 text-xl">
          Find Travel Buddies on our website - the best Travel Buddy Website out
          there. Every trip is organized by verified & passionate travelers just
          like you. Find a travel adventure that fits who you are!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : null}
        transition={{ duration: 1 }}
      >
        <Image
          className="rounded-lg aspect-auto"
          src={"/img/Customer-Service-in-Travel-Industry.jpg"}
          alt="Customer Expectations in Tourism"
          priority={1}
          width={600}
          height={600}
          style={{ width: "auto", height: "auto" }}
        />
      </motion.div>
    </section>
  );
};

export default IntroSection;
