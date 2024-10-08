import CardAnimation from "@/Anim/CardAnimation";
import Image from "next/image";

const BuddyCards = ({ user }) => {
  return (
    <CardAnimation>
      <article className="bg-slate-200 shadow-lg rounded-md w-[350px] overflow-hidden">
        <div className="overflow-hidden">
          <Image
            src={user.profilePic || user.profilepic}
            alt={user.username}
            width={350}
            height={300}
            className="w-full h-full transform hover:duration-500 cursor-pointer object-center object-cover hover:scale-110"
          />
        </div>
        <div className="flex flex-col gap-4 p-4 text-lg">
          <h2 className="font-semibold text-2xl">{user.username}</h2>
          <p className="text-gray-500">Email: {user.email}</p>
        </div>
      </article>
    </CardAnimation>
  );
};

export default BuddyCards;
