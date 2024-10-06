"use client";
import Link from "next/link";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import UserStatus from "./UserStatus";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

const navigations = [
  { id: 1, title: "User", src: "/users" },
  { id: 2, title: "Destination", src: "/destinations" },
  { id: 3, title: "Trip", src: "/trips" },
];

export default function Navbar() {
  const path = usePathname();
  const [show, setShow] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setShow(false));

  return (
    <nav
      className="top-0 z-10 fixed bg-primaryDarkBlue p-2 w-full text-white/90"
      ref={ref}
    >
      <div className="flex justify-between items-center">
        <Link className="no-underline" href="/" style={{ color: "inherit" }}>
          <h1 className="text-3xl">Travel Buddy</h1>
        </Link>

        <div className="sm:flex sm:gap-4 hidden sm:text-2xl">
          {navigations.map((nav) => (
            <Link className={styles.navBtn} href={nav.src} key={nav.id}>
              {nav.title}
            </Link>
          ))}
          <UserStatus />
        </div>

        <div className="block sm:hidden">
          <RxHamburgerMenu
            className="cursor-pointer"
            size={30}
            onClick={() => setShow(true)}
          />
          {show && (
            <div className="top-0 right-0 absolute bg-slate-800 p-4 h-max text-2xl text-white/90">
              <RxCross2
                className="ml-auto cursor-pointer"
                size={30}
                onClick={() => setShow(false)}
              />
              <div className="relative flex flex-col items-start gap-4">
                {navigations.map((nav) => (
                  <Link
                    onClick={() => path != nav.src && setShow(false)}
                    className={`px-2 ${styles.navBtn}`}
                    href={nav.src}
                    key={nav.id}
                  >
                    {nav.title}
                  </Link>
                ))}
                <UserStatus />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
