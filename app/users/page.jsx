"use client";
import BuddyCards from "@/components/rootPage/BuddyCards";
import { useUsers } from "@/hooks/queries";
import styles from "./page.module.css";
import CardSkeleton from "@/components/skeletons/CardSkeleton";

export default function UsersPage() {
  const { data: users, isLoading, isError, error } = useUsers();

  // if (isLoading)
  //   return (
  //     <div className={styles.userWrapper}>
  //       <div className={styles.userCardWrapper}>
  //         {Array.from({ length: 8 }, (_, index) => index + 1).map((n) => (
  //           <CardSkeleton key={n} />
  //         ))}
  //       </div>
  //     </div>
  //   );

  if (isError) return <div>Error: {error}</div>;

  return (
    <main className={styles.userPage}>
      <div className={styles.userWrapper}>
        <h1 className="text-3xl font-semibold text-center mb-4">Users</h1>
        <section className={styles.userCardWrapper}>
          {isLoading
            ? Array.from({ length: 8 }, (_, index) => index + 1).map((n) => (
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
