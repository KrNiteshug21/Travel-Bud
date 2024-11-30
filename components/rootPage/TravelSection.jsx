"use client";
import { TextRevealAnimation } from "@/Anim/TextRevealAnimation";
import Cards from "./Cards";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Users, Compass, Plane, HeadphonesIcon } from "lucide-react";

const travelWithUsData = [
  {
    id: 0,
    title: "Incredibly Authentic",
    desc: "Find like-minded travel buddies and discover an authentic and exciting new way of traveling.",
    icon: (
      <div className="bg-blue-500 mx-auto mb-4 p-3 rounded-full w-max">
        <Users className="w-8 h-8 text-white" />
      </div>
    ),
  },
  {
    id: 1,
    title: "Memorably Unique",
    desc: "Our TripLeaders have a magic touch to make each trip special! Explore extraordinary destinations, walk off-the-beaten-path, and experience unique itineraries.",
    icon: (
      <div className="bg-green-500 mx-auto mb-4 p-3 rounded-full w-max">
        <Compass className="w-8 h-8 text-white" />
      </div>
    ),
  },
  {
    id: 2,
    title: "Genuinely Easy",
    desc: "Travel effortlessly with our unique trips. We do the hard work for you. So, sit back and get ready for a wholesome journey!",
    icon: (
      <div className="bg-yellow-500 mx-auto mb-4 p-3 rounded-full w-max">
        <Plane className="w-8 h-8 text-white" />
      </div>
    ),
  },
  {
    id: 3,
    title: "24/7 Support",
    desc: "Your satisfaction is our priority. We are available around the clock to help you. Reach out to our support center for any inquiries.",
    icon: (
      <div className="bg-red-500 mx-auto mb-4 p-3 rounded-full w-max">
        <HeadphonesIcon className="w-8 h-8 text-white" />
      </div>
    ),
  },
];

const TravelSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-00px", once: true });

  return (
    <section className="py-20">
      <h1 className="mx-auto mb-8 w-max font-semibold text-3xl tracking-wider">
        <TextRevealAnimation isInView={isInView} text="Why Travel With Us" />
      </h1>
      <div
        ref={ref}
        className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        {travelWithUsData.map((data) => (
          <Cards isInView={isInView} key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default TravelSection;
