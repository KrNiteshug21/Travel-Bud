import BuddyCards from "@/components/rootPage/BuddyCards";
import { fetchUsers } from "@/lib/userData";
import styles from "./page.module.css";

export default async function UsersPage() {
  const users = await fetchUsers();
  console.log("users", users);
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
