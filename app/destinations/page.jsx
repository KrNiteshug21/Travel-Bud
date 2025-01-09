"use client";
import DestinationCards from "@/components/destinationPage/DestinationCards";
import { useDestinations } from "@/hooks/queries";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

export default function DestinationPage() {
  const { data: destinations, isError, error, isLoading } = useDestinations();

  if (isError) return <div>Error: {error}</div>;

  return (
    <main className="mt-16 mb-6">
      <SectionWrapper>
        <h2 className="my-2 font-semibold text-2xl text-center">
          Destinations we offer assistance to.
        </h2>
        <div className="gap-4 space-y-4 p-4 columns-1 md:columns-2 lg:columns-3">
          {isLoading
            ? Array.from({ length: 6 }, (_, index) => index + 1).map((n) => (
                <CardSkeleton key={n} />
              ))
            : destinations?.map((dest) => (
                <DestinationCards key={dest._id} dest={dest} />
              ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
