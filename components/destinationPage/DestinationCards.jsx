import Image from "next/image";
import styles from "./page.module.css";

const BuddyCards = ({ dest }) => {
  return (
    <article className="bg-slate-200 w-[350px] overflow-hidden rounded-lg shadow-md">
      <Image
        src={dest?.images[0]}
        alt={dest?.destinationName}
        width={350}
        height={300}
      />
      <div className="flex flex-col gap-4 p-4 text-lg">
        <h2 className="text-2xl font-semibold">
          {dest?.destinationName}: {dest?.destinationTitle}
        </h2>
        <p className="text-gray-500">{dest?.description}</p>
        <p className="text-gray-500 flex justify-between pr-8">
          <span>TravelCost:</span>{" "}
          <span> ₹{parseInt(dest?.travelcost) * 10}</span>
        </p>

        <a href="#">
          <button className="text-xl px-4 py-2 bg-black/80 text-white/90 rounded-md">
            Join trip
          </button>
        </a>
      </div>
    </article>
  );
};

export default BuddyCards;
