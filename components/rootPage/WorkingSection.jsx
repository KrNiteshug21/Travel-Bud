"use client";
import Cards from "./Cards";
import { TextRevealAnimation } from "@/Anim/TextRevealAnimation";
import { Search, Calendar, Plane, Share2 } from "lucide-react";

const howDoesItWorkData = [
  {
    id: 0,
    title: "Find your Travel Buddy",
    desc: "Find your next travel buddy in your dream destination and discover unique adventures around the world.",
    icon: (
      <div className="bg-blue-500 mb-4 p-3 rounded-full w-max">
        <Search className="w-8 h-8 text-white" />
      </div>
    ),
  },
  {
    id: 1,
    title: "Book your Dream Trip",
    desc: "Secure your spot on your dream trip with the best travel buddies in the world by paying a 20% deposit.",
    icon: (
      <div className="bg-green-500 mb-4 p-3 rounded-full w-max">
        <Calendar className="w-8 h-8 text-white" />
      </div>
    ),
  },
  {
    id: 2,
    title: "Travel the World together!",
    desc: "Pack your bags and off you go! Meet amazing travel friends and discover unique places worldwide!",
    icon: (
      <div className="bg-yellow-500 mb-4 p-3 rounded-full w-max">
        <Plane className="w-8 h-8 text-white" />
      </div>
    ),
  },
  {
    id: 3,
    title: "Share your Experience",
    desc: "Share your travel experience with the world. Inspire others to travel and create unforgettable memories!",
    icon: (
      <div className="bg-red-500 mb-4 p-3 rounded-full w-max">
        <Share2 className="w-8 h-8 text-white" />
      </div>
    ),
  },
];

const WorkingSection = () => {
  return (
    <section className="px-4 py-20">
      <TextRevealAnimation
        className="mx-auto mb-8 w-max font-semibold text-3xl tracking-wider"
        text="How Does It Work?"
      />

      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {howDoesItWorkData.map((data) => (
          <Cards key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default WorkingSection;
