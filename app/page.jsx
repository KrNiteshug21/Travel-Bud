import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-screen-xl">
        <section className="flex flex-wrap justify-between items-center gap-10 mx-auto px-10 py-16 min-h-[80vh]">
          <div className="space-y-4 w-1/3 break-words leading-6">
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
            />
          </div>
        </section>

        <section className="flex flex-col justify-center items-center gap-8 min-h-[80vh]">
          <div className="space-y-2 text-center">
            <h2 className="font-semibold text-3xl text-black/90 tracking-wide">
              How Does It Work?
            </h2>
            <p className="text-gray-400 text-lg">
              Find your next travel buddies in just a few clicks. Simple as
              ever!
            </p>
          </div>
          <div className="flex flex-row flex-wrap justify-around gap-4">
            <div className="flex flex-col justify-center items-center gap-4 p-4 rounded-md w-[300px]">
              <h2 className="font-semibold text-2xl text-black/90 tracking-wide">
                Find your next Travel Buddy
              </h2>
              <p className="text-gray-400 text-lg">
                Find your next travel buddy in your dream destination and
                discover unique adventures around the world.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4 rounded-md w-[300px]">
              <h2 className="font-semibold text-2xl text-black/90 tracking-wide">
                Book your Dream Trip
              </h2>
              <p className="text-gray-400 text-lg">
                Secure your spot on your dream trip with the best travel buddies
                in the world by paying a 20% deposit.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4 rounded-md w-[300px]">
              <h2 className="font-semibold text-2xl text-black/90 tracking-wide">
                Travel the World together!
              </h2>
              <p className="text-gray-400 text-lg">
                Pack your bags and off you go! Meet amazing travel friends and
                discover unique places worldwide!
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 min-h-[80vh] text-black/70">
          <h1 className="mx-auto mb-8 w-max font-semibold text-3xl tracking-wider">
            Why Travel With Us
          </h1>
          <div className="flex flex-wrap justify-around gap-4">
            <div className="space-y-4 p-4 rounded-md w-[300px]">
              <h2 className="font-semibold text-2xl text-black/90 tracking-wide">
                Incredibly Authentic
              </h2>
              <p className="text-gray-400 text-lg">
                Find like-minded travel buddies and discover an authentic and
                exciting new way of traveling.
              </p>
            </div>
            <div className="space-y-4 p-4 rounded-md w-[300px]">
              <h2 className="font-semibold text-2xl text-black/90 tracking-wide">
                Memorably Unique
              </h2>
              <p className="text-gray-400 text-lg">
                Our TripLeaders have a magic touch to make each trip special!
                Explore extraordinary destinations, walk off-the-beaten-path,
                and experience unique itineraries.
              </p>
            </div>
            <div className="space-y-4 p-4 rounded-md w-[300px]">
              <h2 className="font-semibold text-2xl text-black/90 tracking-wide">
                Genuinely Easy
              </h2>
              <p className="text-gray-400 text-lg">
                Travel effortlessly with our unique trips. We do the hard work
                for you. So, sit back and get ready for a wholesome journey!
              </p>
            </div>
            <div className="space-y-4 p-4 rounded-md w-[300px]">
              <h2 className="font-semibold text-2xl text-black/90 tracking-wide">
                24/7 Support
              </h2>
              <p className="text-gray-400 text-lg">
                Your satisfaction is our priority. We are available around the
                clock to help you. Reach out to our support center for any
                inquiries.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
