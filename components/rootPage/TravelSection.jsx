"use client";
import { TextRevealAnimation } from "@/Anim/TextRevealAnimation";
import Cards from "./Cards";
import { useRef } from "react";
import { useInView } from "framer-motion";

const travelWithUsData = [
  {
    id: 0,
    title: "Incredibly Authentic",
    desc: "Find like-minded travel buddies and discover an authentic and exciting new way of traveling.",
  },
  {
    id: 1,
    title: "Memorably Unique",
    desc: "Our TripLeaders have a magic touch to make each trip special! Explore extraordinary destinations, walk off-the-beaten-path, and experience unique itineraries.",
  },
  {
    id: 2,
    title: "Genuinely Easy",
    desc: "Travel effortlessly with our unique trips. We do the hard work for you. So, sit back and get ready for a wholesome journey!",
  },
  {
    id: 3,
    title: "24/7 Support",
    desc: "Your satisfaction is our priority. We are available around the clock to help you. Reach out to our support center for any inquiries.",
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
        className="flex flex-wrap justify-around items-start gap-4"
      >
        {travelWithUsData.map((data) => (
          <Cards isInView={isInView} key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default TravelSection;
