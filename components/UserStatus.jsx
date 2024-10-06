"use client";
import styles from "./page.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserStatus = () => {
  const { data: session } = useSession();
  // console.log(session);

  if (!session) {
    return (
      <>
        <button className={styles.navBtn}>
          <Link href="/account/sign_up">Sign up</Link>
        </button>
        <button className={styles.navBtn} onClick={() => signIn()}>
          Log in
        </button>
      </>
    );
  }

  if (session.status === "loading") return <p>Loading...</p>;

  return (
    <>
      {/* <p>Signed in as {session?.user?.email}</p> */}
      <button className={styles.navBtn} onClick={() => signOut()}>
        Sign out
      </button>
    </>
  );
};

export default UserStatus;
