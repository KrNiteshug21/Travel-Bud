"use client";
import { useSession } from "next-auth/react";
import CardSkeleton from "../skeletons/CardSkeleton";
import CardAnimation from "@/Anim/CardAnimation";
import Link from "next/link";
import ButtonAnimation from "@/Anim/ButtonAnimation";
import { useState } from "react";
import SuccessModal from "../SuccessModal";
import { SlidingCarousel } from "../Carousels/sliding-carousel";

const initialModalObj = {
  header: "",
  msg: "",
  trigger: false,
};

const TripCard = ({ trip }) => {
  const session = useSession();
  const [modalObj, setModalObj] = useState(initialModalObj);
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
    setModalObj({
      header: data.status === 200 ? "Success" : "Error",
      msg: data.message,
      trigger: true,
    });
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

    setModalObj({
      header: data.status === 200 ? "Success" : "Error",
      msg: data.message,
      trigger: true,
    });
  };

  const clickFunction = () => {
    if (modalObj.header === "Success") window.location.reload();
    setModalObj(initialModalObj);
    return;
  };

  return (
    <>
      {modalObj.trigger && (
        <SuccessModal modalObj={modalObj} clickFunction={clickFunction} />
      )}
      <CardAnimation>
        <div className="shadow-2xl mb-4 rounded-lg overflow-hidden">
          <SlidingCarousel images={trip?.images} />

          <div className="space-y-4 p-4 text-gray-500">
            <h2 className="font-semibold text-2xl text-black/90">
              <Link className="hover:underline" href={`/trips/${trip._id}`}>
                {trip.destinationName}: {trip.destinationTitle}
              </Link>
            </h2>
            <p className="">{trip.description}</p>
            <div className="flex justify-between items-center">
              <ButtonAnimation
                text="Join Trip"
                clickFunction={joinTrip}
                className="bg-blue-600 hover:bg-blue-900 px-4 py-2 rounded-lg text-white"
              />
              <ButtonAnimation
                text="Delete Trip"
                clickFunction={deleteTrip}
                className="bg-red-700 hover:bg-red-900 px-4 py-2 rounded-lg text-white"
              />
            </div>
          </div>
        </div>
      </CardAnimation>
    </>
  );
};

export default TripCard;
