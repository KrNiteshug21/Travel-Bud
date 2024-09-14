"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { MdAccountCircle } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import UserStatus from "./UserStatus";

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
            <Link href={nav.src} key={nav.id}>
              {nav.title}
            </Link>
          ))}
          {/* <div className={styles.accountWrapper}>
            <button
              onClick={() => setShow(!show)}
              onMouseEnter={() => setShow(true)}
            >
              <MdAccountCircle size={26} />
            </button>
            {show && (
              <div className={styles.popup}>
                <Link href="/account/sign_up">Sign up</Link>
                <Link href="/account/sign_in">Sign in</Link>
                <Link href="/account/create_trip">Create Trip</Link>
              </div>
            )}
          </div> */}
          <UserStatus />
        </div>
      </div>
    </nav>
  );
}
