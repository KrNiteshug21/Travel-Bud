"use client";
import Link from "next/link";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import UserStatus from "./UserStatus";
import { usePathname } from "next/navigation";

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
      className="top-0 z-10 sticky bg-black/90 p-2 w-full h-full min-h-fit-content text-white"
      ref={ref}
    >
      <div className="flex justify-between items-center">
        <Link className="no-underline" href="/" style={{ color: "whitesmoke" }}>
          <h1 className="text-3xl">Travel Buddy</h1>
        </Link>

        <div className="sm:flex sm:gap-2 hidden sm:text-2xl">
          {navigations.map((nav) => (
            <Link
              className="hover:bg-white/20 px-2 py-1 rounded h-full"
              href={nav.src}
              key={nav.id}
            >
              {nav.title}
            </Link>
          ))}
          <UserStatus />
        </div>
        <div className="block sm:hidden">
          <RxHamburgerMenu size={30} onClick={() => setShow(true)} />
          {show && (
            <div className="absolute top-0 p-4 right-0 h-screen w-max bg-white text-black text-2xl">
              <RxCross2
                className="ml-auto"
                size={30}
                onClick={() => setShow(false)}
              />
              <div className="flex gap-4 flex-col items-start ">
                {navigations.map((nav) => (
                  <Link
                    onClick={() => path != nav.src && setShow(false)}
                    className=""
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
