"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import TripCard from "@/components/tripPage/TripCard";
import CardSkeleton from "@/components/skeletons/CardSkeleton";

export default function TripPage() {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch("/api/trip");
      if (!response.ok) {
        alert("Network response was not ok");
        return;
      }

      const data = await response.json();
      setTrips(data);
      setIsLoading(false);
    };

    fetchTrips();
  }, []);

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

  if (!trips) return <p>No trips available</p>;

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
