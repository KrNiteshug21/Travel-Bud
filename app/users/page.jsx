"use client";
import BuddyCards from "@/components/rootPage/BuddyCards";
import { useUsers } from "@/hooks/queries";
import styles from "./page.module.css";

export default function UsersPage() {
  const { data: users, isLoading, isError, error } = useUsers();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error}</div>;

  return (
    <main className={styles.userPage}>
      <div className={styles.userWrapper}>
        <h1 className={styles.userHeading}>Users</h1>
        <section className={styles.userCardWrapper}>
          {users?.map((user) => {
            return <BuddyCards key={user._id} user={user} />;
          })}
        </section>
      </div>
    </main>
  );
}
