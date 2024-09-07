"use client";
import DestinationCards from "@/components/destinationPage/DestinationCards";
import { useDestinations } from "@/hooks/queries";
import styles from "./page.module.css";
import CardSkeleton from "@/components/skeletons/CardSkeleton";

export default function DestinationPage() {
  const { data: destinations, isError, error, isLoading } = useDestinations();

  // if (isLoading)
  //   return (
  //     <div className="flex items-center justify-center gap-4 flex-wrap py-10 setWidth">
  //       {Array.from({ length: 8 }, (_, index) => index + 1).map((n) => (
  //         <CardSkeleton key={n} />
  //       ))}
  //     </div>
  //   );

  if (isError) return <div>Error: {error}</div>;

  return (
    <>
      <main className={styles.destinationPage}>
        <div className={styles.destinationWrapper}>
          <h1 className="text-3xl font-semibold text-center mb-4">
            Destinations we offer assistance to.
          </h1>
          <section className={styles.destinationCardWrapper}>
            {isLoading
              ? Array.from({ length: 8 }, (_, index) => index + 1).map((n) => (
                  <CardSkeleton key={n} />
                ))
              : destinations?.map((dest) => {
                  return <DestinationCards key={dest._id} dest={dest} />;
                })}
          </section>
        </div>
      </main>
    </>
  );
}
