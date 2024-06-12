import Image from "next/image";
import styles from "./page.module.css";

const BuddyCards = ({ dest }) => {
  return (
    <article className={styles.buddyCard}>
      <Image
        src={dest?.images[0]}
        alt={dest?.destinationName}
        width={350}
        height={300}
      />
      <div className={styles.buddyCardDesc}>
        <h2>
          {dest?.destinationName}: {dest?.destinationTitle}
        </h2>
        <p>{dest?.description}</p>
        <p>TravelCost: ₹{parseInt(dest?.travelcost) * 10}</p>

        <a href="#">
          <button className={styles.joinBtn}>Join trip</button>
        </a>
      </div>
    </article>
  );
};

export default BuddyCards;
