"use client";
import BuddyCards from "@/components/rootPage/BuddyCards";
import { useUsers } from "@/hooks/queries";
import styles from "./page.module.css";
import CardSkeleton from "@/components/skeletons/CardSkeleton";

export default function UsersPage() {
  const { data: users, isLoading, isError, error } = useUsers();

  if (isError) return <div>Error: {error}</div>;

  return (
    <main className={styles.userPage}>
      <div className={styles.userWrapper}>
        <h1 className="mb-4 font-semibold text-3xl text-center">Users</h1>
        <section className={styles.userCardWrapper}>
          {isLoading
            ? Array.from({ length: 6 }, (_, index) => index + 1).map((n) => (
                <CardSkeleton key={n} />
              ))
            : users?.map((user) => {
                return <BuddyCards key={user._id} user={user} />;
              })}
        </section>
      </div>
    </main>
  );
}
