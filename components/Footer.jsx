"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const footers = [
  {
    head: "TRAVEL",
    links: [
      { title: "How it Works", src: "/#working" },
      { title: "Find a trip", src: "/trips" },
      { title: "Create a trip", src: "/account/create_trip" },
    ],
  },
  { head: "LATEST NEWS", links: [{ title: "Blog", src: "#" }] },
  {
    head: "Travel Buddy",
    links: [
      { title: "About us", src: "#" },
      { title: "Careers", src: "#" },
    ],
  },
  {
    head: "SUPPORT",
    links: [
      { title: "Help & FAQ", src: "#" },
      { title: "Travel Insurance", src: "#" },
      { title: "Contact", src: "#" },
    ],
  },
];

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    threshold: 0.5,
    once: true,
  });

  return (
    <footer className="bg-primaryDarkBlue text-white overflow-hidden">
      <div className="flex flex-wrap justify-between gap-4 px-8 py-12">
        {footers.map((footer, index) => {
          return (
            <div ref={ref} key={index} className="flex flex-col gap-4">
              <motion.h3
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : null}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-2xl"
              >
                {footer.head}
              </motion.h3>
              {footer.links.map((link, i) => {
                return (
                  <motion.div
                    key={`${index}+${i}`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : null}
                    transition={{
                      duration: 0.5,
                      delay: (i + 1) * 0.25,
                      ease: "easeInOut",
                    }}
                  >
                    <Link
                      className="text-white/50 text-xl hover:text-white/70 hover:underline no-underline"
                      href={link.src}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
