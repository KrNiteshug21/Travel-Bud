"use client";
import { useSession } from "next-auth/react";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import CardSkeleton from "../skeletons/CardSkeleton";

const TripCard = ({ trip }) => {
  const session = useSession();
  console.log("session", session);
  if (session.status === "loading" || !trip) return <CardSkeleton />;

  const joinTrip = async () => {
    const res = await fetch(`/api/trip/${trip._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: session.data.user.id }),
    });
    const data = await res.json();
    console.log("data", data);
    revalidatePath("/trips", "page");
  };

  const deleteTrip = async () => {
    const res = await fetch(`/api/trip/${trip._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        createdBy: trip.createdBy._id,
        userId: session.data.user.id,
      }),
    });
    const data = await res.json();
    console.log("data", data);
    alert(data.message);
  };

  return (
    <div className="shadow-2xl rounded-lg w-[350px] overflow-hidden">
      <div>
        <Image
          src={trip.images[0]}
          alt={trip.destinationName}
          width={350}
          height={350}
          className="object-center object-cover"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="p-4 text-gray-500 space-y-4">
        <h2 className="font-semibold text-2xl text-black/90">
          {trip.destinationName}: {trip.destinationTitle}
        </h2>
        <p className="">{trip.description}</p>
        <p className="flex gap-4">
          <span className="text-xl text-gray-700 font-semibold">
            Created by: {trip.createdBy?.username}
          </span>
        </p>
        {trip.peoplejoined.length > 0 && (
          <p>
            People joined:{" "}
            {trip.peoplejoined.map((user) => user.username).join(", ")}
          </p>
        )}
        <div className="flex items-center justify-between ">
          <button
            onClick={joinTrip}
            className="bg-blue-600 hover:bg-blue-900 text-white py-2 px-4 rounded-lg"
          >
            Join Trip
          </button>
          <button
            onClick={deleteTrip}
            className="bg-red-700 hover:bg-red-900 text-white py-2 px-4 rounded-lg"
          >
            Delete Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
