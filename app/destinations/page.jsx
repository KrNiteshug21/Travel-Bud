"use client";
import DestinationCards from "@/components/destinationPage/DestinationCards";
import { useDestinations } from "@/hooks/queries";
import styles from "./page.module.css";

export default function DestinationPage() {
  const { data: destinations, isError, error, isLoading } = useDestinations();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error}</div>;
  console.log("destinations");

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
