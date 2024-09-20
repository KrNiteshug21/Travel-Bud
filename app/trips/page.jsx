import styles from "./page.module.css";
import connectDB from "@/lib/DBConn";
import Trip from "@/models/Trip";
import User from "@/models/User";
import TripCard from "@/components/tripPage/TripCard";

export default async function TripPage() {
  let trips = [];
  try {
    await connectDB();
    trips = await Trip.find({}).populate([
      {
        model: User,
        path: "createdBy",
        select: "username email profilePic",
      },
      {
        model: User,
        path: "peoplejoined",
        select: "username email profilePic",
      },
    ]);
  } catch (error) {
    console.log(error);
  }

  if (!trips?.length) {
    return (
      <main>
        <section className={styles.sectionWrapper}>
          <h1>No trips exist in database</h1>
        </section>
      </main>
    );
  }

  return (
    <main className="mt-4 mb-6">
      <section className={styles.sectionWrapper}>
        <h2 className="my-2 font-semibold text-2xl text-center">TripPage</h2>
        <div className="flex flex-wrap justify-center items-start gap-4">
          {trips &&
            trips.map((trip) => (
              <TripCard
                key={JSON.parse(JSON.stringify(trip._id))}
                trip={JSON.parse(JSON.stringify(trip))}
              />
            ))}
        </div>
      </section>
    </main>
  );
}
