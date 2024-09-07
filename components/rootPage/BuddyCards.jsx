import Image from "next/image";
import Link from "next/link";

const BuddyCards = ({ user }) => {
  return (
    <article className="bg-slate-200 shadow-lg rounded-md w-[350px] overflow-hidden">
      <Image
        src={user.profilepic}
        alt={user.name}
        width={350}
        height={300}
        style={{ height: "auto", width: "auto" }}
      />

      <div className="flex flex-col gap-4 p-4 text-lg">
        <h2 className="font-semibold text-2xl">{user.name}</h2>
        <p className="text-gray-500">
          {user.desc?.length > 30 ? `${user.desc.slice(0, 30)}...` : user.desc}
        </p>
        <p className="flex justify-between text-gray-500">
          <span>Destination</span> <span>{user.destination}</span>
        </p>
        <p className="flex justify-between text-gray-500">
          <span>Travel Month</span> <span>{user.month}</span>
        </p>
        <Link href="#">
          <button className="bg-black/80 px-4 py-2 rounded-md text-white/90 text-xl">
            Join trip
          </button>
        </Link>
      </div>
    </article>
  );
};

export default BuddyCards;
