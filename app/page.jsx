import Image from "next/image";
import Header from "@/components/Header";
import Cards from "@/components/rootPage/Cards";

const travelWithUsData = [
  {
    id: 1,
    title: "Incredibly Authentic",
    desc: "Find like-minded travel buddies and discover an authentic and exciting new way of traveling.",
  },
  {
    id: 2,
    title: "Memorably Unique",
    desc: "Our TripLeaders have a magic touch to make each trip special! Explore extraordinary destinations, walk off-the-beaten-path, and experience unique itineraries.",
  },
  {
    id: 3,
    title: "Genuinely Easy",
    desc: "Travel effortlessly with our unique trips. We do the hard work for you. So, sit back and get ready for a wholesome journey!",
  },
  {
    id: 4,
    title: "24/7 Support",
    desc: "Your satisfaction is our priority. We are available around the clock to help you. Reach out to our support center for any inquiries.",
  },
];

const howDoesItWorkData = [
  {
    id: 1,
    title: "Find your next Travel Buddy",
    desc: "Find your next travel buddy in your dream destination and discover unique adventures around the world.",
  },
  {
    id: 2,
    title: "Book your Dream Trip",
    desc: "Secure your spot on your dream trip with the best travel buddies in the world by paying a 20% deposit.",
  },
  {
    id: 3,
    title: "Travel the World together!",
    desc: "Pack your bags and off you go! Meet amazing travel friends and discover unique places worldwide!",
  },
  {
    id: 4,
    title: "Share your Experience",
    desc: "Share your travel experience with the world. Inspire others to travel and create unforgettable memories!",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-screen-xl">
        <section className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 mx-auto px-10 py-16 my-10">
          <div className="space-y-4 md:w-1/3 break-words leading-6">
            <h2 className="font-semibold text-3xl text-black/90 tracking-wide">
              Real & verified travelers!
            </h2>
            <p className="text-gray-400 text-xl">
              Find Travel Buddies on our website - the best Travel Buddy Website
              out there. Every trip is organized by verified & passionate
              travelers just like you. Find a travel adventure that fits who you
              are!
            </p>
          </div>
          <div className="">
            <Image
              className="rounded-lg aspect-auto"
              src={"/img/Customer-Service-in-Travel-Industry.jpg"}
              alt="Customer Expectations in Tourism"
              width={600}
              height={600}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </section>

        <section className="py-20  text-black">
          <h2 className="mx-auto mb-8 w-max font-semibold text-3xl tracking-wider">
            How Does It Work?
          </h2>
          <div className="flex flex-row items-start flex-wrap justify-around gap-4">
            {howDoesItWorkData.map((data) => (
              <Cards key={data.id} data={data} />
            ))}
          </div>
        </section>

        <section className="py-20  text-black">
          <h1 className="mx-auto mb-8 w-max font-semibold text-3xl tracking-wider">
            Why Travel With Us
          </h1>
          <div className="flex items-start flex-wrap justify-around gap-4">
            {travelWithUsData.map((data) => (
              <Cards key={data.id} data={data} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
