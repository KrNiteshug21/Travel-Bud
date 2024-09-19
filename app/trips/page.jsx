"use client";
import { getTrips } from "@/hooks/queries";
import styles from "./page.module.css";
import TripCard from "@/components/tripPage/TripCard";
import CardSkeleton from "@/components/skeletons/CardSkeleton";

export default function TripPage() {
  const { data: trips, isLoading, isError, error } = getTrips();

  if (isLoading)
    return (
      <section className={styles.sectionWrapper}>
        <div className="flex flex-wrap justify-center items-center gap-4 py-10 setWidth">
          {Array.from({ length: 6 }, (_, index) => index + 1).map((n) => (
            <CardSkeleton key={n} />
          ))}
        </div>
      </section>
    );

  if (isError) return <div>Error: {error}</div>;

  if (!trips?.length) {
    return (
      <main>
        <section className={styles.sectionWrapper}>
          <h1>No trips exist in database</h1>
        </section>
      </main>
    );
  }

  return (
    <main className="mt-4 mb-6">
      <section className={styles.sectionWrapper}>
        <h2 className="my-2 font-semibold text-2xl text-center">TripPage</h2>
        <div className="flex flex-wrap justify-center items-start gap-4">
          {trips.map((trip) => (
            <TripCard
              key={JSON.parse(JSON.stringify(trip._id))}
              trip={JSON.parse(JSON.stringify(trip))}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
