"use client";
import styles from "./page.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { motion } from "framer-motion";

const UserStatus = ({ isInView }) => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: isInView ? 20 : 0,
            opacity: isInView ? 0 : 1,
          }}
          transition={{
            duration: 0.25,
            delay: 0.45 + 0.1 * 4,
          }}
          className={styles.navBtn}
        >
          <Link href="/account/sign_up">Sign up</Link>
        </motion.button>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: isInView ? 20 : 0,
            opacity: isInView ? 0 : 1,
          }}
          transition={{
            duration: 0.25,
            delay: 0.45 + 0.1 * 5,
          }}
          className={styles.navBtn}
          onClick={() => signIn()}
        >
          Log in
        </motion.button>
      </>
    );
  }

  if (session.status === "loading") return <p>Loading...</p>;

  return (
    <>
      {/* <p>Signed in as {session?.user?.email}</p> */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: isInView ? 20 : 0,
          opacity: isInView ? 0 : 1,
        }}
        transition={{
          duration: 0.25,
          delay: 0.45 + 0.1 * 4,
        }}
        className={styles.navBtn}
        onClick={() => signOut()}
      >
        Sign out
      </motion.button>
    </>
  );
};

export default UserStatus;
