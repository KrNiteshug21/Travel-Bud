"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { MdAccountCircle } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

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
    <nav className={styles.navbar} ref={ref}>
      <div className={styles.navbarWrapper}>
        <Link href="/" style={{ color: "whitesmoke" }}>
          <h1>Travel Buddy</h1>
        </Link>
        <div className={styles.navLinks}>
          {navigations.map((nav) => (
            <Link
              href={nav.src}
              key={nav.id}
              style={{
                backgroundColor: path === nav.src ? "whitesmoke" : "inherit",
                color: path === nav.src ? "#333" : "whitesmoke",
              }}
            >
              {nav.title}
            </Link>
          ))}
          <div className={styles.accountWrapper}>
            <button
              onClick={() => setShow(!show)}
              // onMouseLeave={() => setShow(false)}
            >
              <span>
                <MdAccountCircle size={26} />
              </span>
            </button>
            {show && (
              <div
                className={styles.popup}
                // style={{
                //   backgroundColor: path === "/" ? "#0C0404" : "whitesmoke",
                //   color: path === "/" ? "whitesmoke" : "#333",
                // }}
              >
                <Link href="/account/register">Register</Link>
                <Link href="/account/login">Login</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
