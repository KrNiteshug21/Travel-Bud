"use client";
import Cards from "./Cards";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TextRevealAnimation } from "@/Anim/TextRevealAnimation";

const howDoesItWorkData = [
  {
    id: 0,
    title: "Find your next Travel Buddy",
    desc: "Find your next travel buddy in your dream destination and discover unique adventures around the world.",
  },
  {
    id: 1,
    title: "Book your Dream Trip",
    desc: "Secure your spot on your dream trip with the best travel buddies in the world by paying a 20% deposit.",
  },
  {
    id: 2,
    title: "Travel the World together!",
    desc: "Pack your bags and off you go! Meet amazing travel friends and discover unique places worldwide!",
  },
  {
    id: 3,
    title: "Share your Experience",
    desc: "Share your travel experience with the world. Inspire others to travel and create unforgettable memories!",
  },
];

const WorkingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px", once: true });

  return (
    <section ref={ref} className="py-20">
      <h2 className="mx-auto mb-8 w-max font-semibold text-3xl tracking-wider">
        <TextRevealAnimation isInView={isInView} text="How Does It Work?" />
      </h2>
      <div className="flex flex-row flex-wrap justify-around items-start gap-4">
        {howDoesItWorkData.map((data) => (
          <Cards isInView={isInView} key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default WorkingSection;
