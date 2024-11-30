"use client";
import Link from "next/link";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import UserStatus from "./UserStatus";
import styles from "./page.module.css";
import { AnimatePresence, motion, useInView } from "framer-motion";

const navigations = [
  { id: 0, title: "User", src: "/users" },
  { id: 1, title: "Destination", src: "/destinations" },
  { id: 2, title: "Trip", src: "/trips" },
];

export default function Navbar() {
  const ref = useRef();
  const mobileNavRef = useRef();
  useOnClickOutside(ref, () => setShow(false));
  const [show, setShow] = useState(false);
  const isInView = useInView(mobileNavRef);

  return (
    <nav
      className="top-0 right-0 left-0 z-10 fixed bg-slate-700 backdrop-blur-lg mx-auto px-4 py-1 w-full"
      ref={ref}
    >
      <div className="flex justify-between items-center gap-10 text-xl">
        <Link
          className="no-underline hover:scale-95 hover:transition-all hover:duration-100"
          href="/"
        >
          <h1 className="text-2xl text-white">Travel Buddy</h1>
        </Link>

        <div className="sm:flex hidden">
          {navigations.map((nav) => (
            <Link className={styles.navBtn} href={nav.src} key={nav.id}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: isInView ? 20 : 0,
                  opacity: isInView ? 0 : 1,
                }}
                transition={{
                  duration: 0.25,
                  delay: 0.45 + 0.1 * nav.id,
                }}
              >
                {nav.title}
              </motion.div>
            </Link>
          ))}
          <UserStatus />
        </div>

        <div className="block sm:hidden overflow-hidden">
          <RxHamburgerMenu
            className="text-white cursor-pointer"
            size={30}
            onClick={() => setShow(true)}
          />
          <AnimatePresence>
            {show && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                ref={mobileNavRef}
                className="top-0 right-0 z-20 absolute bg-slate-800 p-4 w-screen h-screen text-2xl text-white/90 origin-right"
              >
                <RxCross2
                  className="ml-auto cursor-pointer"
                  size={30}
                  onClick={() => setShow(false)}
                />
                <div className="relative flex flex-col items-start gap-4">
                  {navigations.map((nav) => (
                    <Link
                      key={nav.id}
                      onClick={() => path != nav.src && setShow(false)}
                      className={`px-2 ${styles.navBtn}`}
                      href={nav.src}
                    >
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: isInView ? 20 : 0,
                          opacity: isInView ? 0 : 1,
                        }}
                        transition={{
                          duration: 0.25,
                          delay: 0.45 + 0.1 * nav.id,
                        }}
                      >
                        {nav.title}
                      </motion.div>
                    </Link>
                  ))}
                  <UserStatus isInView={isInView} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
