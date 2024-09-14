"use client";
import DestinationCards from "@/components/destinationPage/DestinationCards";
import { useDestinations } from "@/hooks/queries";
import styles from "./page.module.css";
import CardSkeleton from "@/components/skeletons/CardSkeleton";

export default function DestinationPage() {
  const { data: destinations, isError, error, isLoading } = useDestinations();

  // if (isLoading)
  //   return (
  //     <div className="flex flex-wrap justify-center items-center gap-4 py-10 setWidth">
  //       {Array.from({ length: 8 }, (_, index) => index + 1).map((n) => (
  //         <CardSkeleton key={n} />
  //       ))}
  //     </div>
  //   );

  if (isError) return <div>Error: {error}</div>;

  return (
    <main className="mt-4 mb-6">
      <section className={styles.sectionWrapper}>
        <h2 className="my-2 font-semibold text-2xl text-center">
          Destinations we offer assistance to.
        </h2>
        <div className="flex flex-wrap justify-center items-start gap-4">
          {isLoading
            ? Array.from({ length: 8 }, (_, index) => index + 1).map((n) => (
                <CardSkeleton key={n} />
              ))
            : destinations?.map((dest) => {
                return <DestinationCards key={dest._id} dest={dest} />;
              })}
        </div>
      </section>
    </main>
  );
}
