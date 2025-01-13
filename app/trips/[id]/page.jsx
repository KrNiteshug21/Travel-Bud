"use client";
import ButtonAnimation from "@/Anim/ButtonAnimation";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Users,
  Mail,
} from "lucide-react";

const TripDetail = ({ params }) => {
  const { id } = params;
  const [trip, setTrip] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchTrip = async () => {
      const response = await fetch(`/api/trip/${id}`);
      if (!response.ok) {
        alert("Network response was not ok");
        return;
      }

      const data = await response.json();
      if (data.status === 500) {
        alert(data.message);
        return;
      }
      setTrip(data.trip);
    };

    fetchTrip();
  }, [id]);

  const joinTrip = async () => {
    const res = await fetch(`/api/trip/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: session.data.user.id }),
    });
    const data = await res.json();
    if (data.status === 500) return alert(data.message);
    if (data.status === 200) alert(data.message);
    // window.location.reload();
  };

  const deleteTrip = async () => {
    const res = await fetch(`/api/trip/${id}`, {
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
    alert(data.message);
    if (data.revalidated) window.location.reload();
  };

  if (!trip)
    return (
      <section className="mt-24 px-2 lg:px-4 min-h-[60vh] break-words">
        <p className="font-semibold text-4xl text-center">Loading...</p>
      </section>
    );

  return (
    <section className="mt-28 mb-8 px-2 lg:px-4 md:min-h-[65vh] lg:min-h-[60vh] break-words">
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-start gap-8 my-auto h-full">
        <div className="overflow-hidden">
          <Image
            src={trip.images[activeImage]}
            alt={`${trip.destinationName}+${id}`}
            width={1280}
            height={720}
            className="rounded-md w-[600px] h-[350px] object-center object-cover"
          />
          <div className="flex justify-center items-center gap-4 my-2">
            {Array.from({ length: trip.images.length }, (_, index) => {
              return (
                <span key={index} className="text-sky-900 cursor-pointer">
                  {activeImage === index ? (
                    <RiCheckboxBlankCircleFill
                      onMouseEnter={() => setActiveImage(index)}
                    />
                  ) : (
                    <RiCheckboxBlankCircleLine
                      onMouseEnter={() => setActiveImage(index)}
                    />
                  )}
                </span>
              );
            })}
          </div>
        </div>

        <div className="flex-1 space-y-4 w-1/4 text-lg text-slate-600 lg:text-xl">
          <h2 className="font-semibold text-2xl text-slate-800 lg:text-4xl">
            {trip.destinationName}: {trip.destinationTitle}
          </h2>
          <p className="xl:w-1/2 text-justify text-lg break-words">
            {trip.description}
          </p>
          {/* <p>
            <span className="font-medium text-slate-800">TravelCost: </span>₹
            {trip.travelCost}
          </p> */}

          <div className="flex items-center gap-6">
            <div>
              <Image
                src={trip.createdBy.profilePic}
                alt={trip.createdBy.username}
                width={50}
                height={50}
                className="rounded-full w-12 h-12 overflow-hidden object-center object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-700 text-lg">
                <span className="font-medium text-slate-800">Created by:</span>{" "}
                {trip.createdBy.username}
              </p>
              <p className="flex items-center gap-2 text-base">
                <Mail size={16} />
                <span>{trip.createdBy.email}</span>
              </p>
            </div>
          </div>

          {trip.peoplejoined.length > 0 && (
            <p>
              <span className="font-medium text-slate-800">
                People joined:{" "}
              </span>
              {trip.peoplejoined.map((user) => user.username).join(", ")}
            </p>
          )}
          <div className="flex items-center gap-4">
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
    </section>
  );
};

export default TripDetail;
