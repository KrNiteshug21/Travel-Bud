"use server";
import DestinationCards from "@/components/destinationPage/DestinationCards";
import { fetchDestination } from "@/lib/destinationData";
import styles from "./page.module.css";

export default async function DestinationPage() {
  const destinations = await fetchDestination();

  return (
    <>
      <main className={styles.destinationPage}>
        <div className={styles.destinationWrapper}>
          <h1 className={styles.destiantionHeading}>
            Destinations we offer assistance to.
          </h1>
          <section className={styles.destinationCardWrapper}>
            {destinations.map((dest) => {
              return <DestinationCards key={dest._id} dest={dest} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
}
