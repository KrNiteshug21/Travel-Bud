import { getServerSession } from "next-auth";
import Image from "next/image";

const TripCard = async ({ trip, joinTrip }) => {
  const session = await getServerSession();
  console.log("session", session);

  console.log(trip);

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
            Created by: {trip.createdBy.username}
          </span>
          {/* <Image
            src={trip.createdBy.profilePic}
            alt={trip.createdBy.username}
            width={50}
            height={50}
            style={{ width: "auto", height: "auto" }}
            className="rounded-full"
          /> */}
        </p>
        {trip.peoplejoined.length > 0 && (
          <p>{trip.peoplejoined.map((user) => user.username).join(", ")}</p>
        )}
        <button className="bg-black/90 text-white py-2 px-4 rounded-lg">
          Join Trip
        </button>
      </div>
    </div>
  );
};

export default TripCard;
