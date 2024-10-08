"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";

const TripDetail = ({ params }) => {
  const { id } = params;
  const [trip, setTrip] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  console.log("trip", trip);

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
      console.log(data);
    };

    fetchTrip();
  }, [id]);

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
            style={{ width: "auto", height: "auto" }}
            className="rounded-md w-full h-full object-center object-cover"
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
          <h2 className="font-semibold text-2xl text-slate-800 lg:text-4xl underline underline-offset-4">
            {trip.destinationName}: {trip.destinationTitle}
          </h2>
          <p className="xl:w-1/2 break-words">{trip.description}</p>
          <p>
            <span className="font-medium text-slate-800">TravelCost: </span>₹
            {trip.travelCost}
          </p>

          <div className="flex items-center gap-6">
            <div>
              <p className="font-semibold text-gray-700 text-xl">
                <span className="font-medium text-slate-800">Created by:</span>{" "}
                {trip.createdBy.username}
              </p>
              <p>{trip.createdBy.email}</p>
            </div>
            <div>
              <Image
                src={trip.createdBy.profilePic}
                alt={trip.createdBy.username}
                width={50}
                height={50}
                className="rounded-full w-12 h-12 overflow-hidden object-center object-cover"
              />
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
        </div>
      </div>
    </section>
  );
};

export default TripDetail;
