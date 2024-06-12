import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const BuddyCards = ({ user }) => {
  return (
    <article className={styles.buddyCard}>
      <Image src={user.profilepic} alt={user.name} width={350} height={300} />
      <div className={styles.buddyCardDesc}>
        <h2>{user.name}</h2>
        <p>
          {user.desc.length > 30 ? `${user.desc.slice(0, 30)}...` : user.desc}
        </p>
        <p>
          <span>Destination</span> <span>{user.destination}</span>
        </p>
        <p>
          <span>Travel Month</span> <span>{user.month}</span>
        </p>
        <Link href="#">
          <button className={styles.joinBtn}>Join trip</button>
        </Link>
      </div>
    </article>
  );
};

export default BuddyCards;
