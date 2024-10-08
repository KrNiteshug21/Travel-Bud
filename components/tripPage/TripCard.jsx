"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import CardSkeleton from "../skeletons/CardSkeleton";
import CardAnimation from "@/Anim/CardAnimation";
import Link from "next/link";
import ButtonAnimation from "@/Anim/ButtonAnimation";

const TripCard = ({ trip }) => {
  const session = useSession();
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
    if (data.status === 500) return alert(data.message);
    console.log("data", data);
    if (data.status === 200) alert(data.message);
    // window.location.reload();
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
    if (data.revalidated) window.location.reload();
  };

  return (
    <CardAnimation>
      <div className="shadow-2xl rounded-lg w-[350px] overflow-hidden">
        <div className="overflow-hidden">
          <Image
            src={trip.images[0]}
            alt={trip.destinationName}
            width={350}
            height={350}
            className="object-center object-cover w-full h-full transform hover:duration-500 cursor-pointer hover:scale-110 "
          />
        </div>
        <div className="p-4 text-gray-500 space-y-4">
          <h2 className="font-semibold text-2xl text-black/90">
            <Link className="hover:underline" href={`/trips/${trip._id}`}>
              {trip.destinationName}: {trip.destinationTitle}
            </Link>
          </h2>
          <p className="">{trip.description}</p>
          <div className="flex items-center justify-between ">
            <ButtonAnimation
              text="Join Trip"
              clickFunction={joinTrip}
              className="bg-blue-600 hover:bg-blue-900 px-4 py-2 rounded-lg text-white"
            />
            <ButtonAnimation
              text="Delete Trip"
              clickFunction={deleteTrip}
              className="bg-red-700 hover:bg-red-900 text-white py-2 px-4 rounded-lg"
            />
          </div>
        </div>
      </div>
    </CardAnimation>
  );
};

export default TripCard;
