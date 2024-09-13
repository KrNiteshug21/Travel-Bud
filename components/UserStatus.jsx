"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const UserStatus = () => {
  const { data: session } = useSession();

  console.log(session);

  if (!session) {
    return (
      <>
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }

  if (session.status === "loading") return <p>Loading...</p>;

  return (
    <>
      <p>Signed in as {session?.user?.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default UserStatus;
