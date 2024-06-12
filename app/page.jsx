import Image from "next/image";
import image from "@/public/img/Customer-Service-in-Travel-Industry.jpg";
import styles from "./page.module.css";
import Header from "@/components/Header";

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.setWidth}>
          <section className={styles.tourism}>
            <div className={styles.tourismDesc}>
              <h2>Real & verified travelers!</h2>
              <p>
                Find Travel Buddies on our website - the best Travel Buddy
                Website out there. Every trip is organized by verified &
                passionate travelers just like you. Find a travel adventure that
                fits who you are!
              </p>
            </div>
            <div className={styles.tourismImage}>
              <Image
                src={image}
                alt="Customer Expectations in Tourism"
                width="600px"
                height="auto"
              />
            </div>
          </section>
          <section className={styles.workingSection}>
            <div className={styles.workingHeading}>
              <h2>How Does It Work?</h2>
              <p>
                Find your next travel buddies in just a few clicks. Simple as
                ever!
              </p>
            </div>
            <div className={styles.workingCardsContainer}>
              <div className={styles.workingCards}>
                <i></i>
                <h2>Find your next Travel Buddy</h2>
                <p>
                  Find your next travel buddy in your dream destination and
                  discover unique adventures around the world.
                </p>
              </div>
              <div className={styles.workingCards}>
                <i></i>
                <h2>Book your Dream Trip</h2>
                <p>
                  Secure your spot on your dream trip with the best travel
                  buddies in the world by paying a 20% deposit.
                </p>
              </div>
              <div className={styles.workingCards}>
                <i></i>
                <h2>Travel the World together!</h2>
                <p>
                  Pack your bags and off you go! Meet amazing travel friends and
                  discover unique places worldwide!
                </p>
              </div>
            </div>
          </section>

          <section className={styles.travelWithUsWrapper}>
            <h1 className={styles.travelHeading}>Why Travel With Us</h1>
            <div className={styles.travelCardContainer}>
              <div className={styles.travelCards}>
                <h2>Incredibly Authentic</h2>
                <p>
                  Find like-minded travel buddies and discover an authentic and
                  exciting new way of traveling.
                </p>
              </div>
              <div className={styles.travelCards}>
                <h2>Memorably Unique</h2>
                <p>
                  Our TripLeaders have a magic touch to make each trip special!
                  Explore extraordinary destinations, walk off-the-beaten-path,
                  and experience unique itineraries.
                </p>
              </div>
              <div className={styles.travelCards}>
                <h2>Genuinely Easy</h2>
                <p>
                  Travel effortlessly with our unique trips. We do the hard work
                  for you. So, sit back and get ready for a wholesome journey!
                </p>
              </div>
              <div className={styles.travelCards}>
                <h2>24/7 Support</h2>
                <p>
                  Your satisfaction is our priority. We are available around the
                  clock to help you. Reach out to our support center for any
                  inquiries.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
