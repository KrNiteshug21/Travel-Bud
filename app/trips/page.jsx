"use client";
import { useEffect, useState } from "react";
import TripCard from "@/components/tripPage/TripCard";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

export default function TripPage() {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const filteredTrips = trips.filter((trip) =>
    trip.destinationName.toLowerCase().includes(search.toLowerCase())
  );

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
      <SectionWrapper>
        <div className="gap-4 space-y-4 p-4 columns-1 md:columns-2 lg:columns-3">
          {Array.from({ length: 6 }, (_, index) => index + 1).map((n) => (
            <CardSkeleton key={n} />
          ))}
        </div>
      </SectionWrapper>
    );

  if (!trips) return <p>No trips available</p>;

  return (
    <main className="mt-16 mb-6">
      <SectionWrapper>
        <div className="flex justify-center items-center gap-8 mb-4">
          <h2 className="my-2 font-semibold text-2xl text-center">TripPage</h2>
          <input
            className="border-gray-700 px-2 border-b-2 rounded-md w-96 h-10 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
        </div>
        <div className="gap-4 space-y-4 p-4 columns-1 md:columns-2 lg:columns-3">
          {filteredTrips.length > 0 ? (
            filteredTrips.map((trip) => (
              <TripCard
                key={JSON.parse(JSON.stringify(trip._id))}
                trip={JSON.parse(JSON.stringify(trip))}
              />
            ))
          ) : (
            <p>Trip named {search} not found</p>
          )}
        </div>
      </SectionWrapper>
    </main>
  );
}
