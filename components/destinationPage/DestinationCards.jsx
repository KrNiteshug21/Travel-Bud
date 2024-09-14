import Image from "next/image";

const BuddyCards = ({ dest }) => {
  return (
    <div className="shadow-2xl rounded-lg w-[350px] overflow-hidden">
      <Image
        src={dest?.images[0]}
        alt={dest?.destinationName}
        width={350}
        height={300}
        className="object-center object-cover"
        style={{ width: "auto", height: "auto" }}
      />
      <div className="p-4 text-gray-500 space-y-4">
        <h2 className="font-semibold text-2xl text-black/90">
          {dest?.destinationName}: {dest?.destinationTitle}
        </h2>
        <p className="">{dest?.description}</p>
        <p className="flex justify-between pr-8 text-gray-500">
          <span>TravelCost:</span>{" "}
          <span> ₹{parseInt(dest?.travelcost) * 10}</span>
        </p>

        <button className="bg-black/90 text-white py-2 px-4 rounded-lg">
          Join trip
        </button>
      </div>
    </div>
  );
};

export default BuddyCards;
