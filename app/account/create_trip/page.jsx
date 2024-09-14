"use client";
import styles from "./page.module.css";
import { UploadButton } from "@/hooks/uploadthing";
import { useSession } from "next-auth/react";
import { useState } from "react";

const destObject = {
  destinationName: "",
  destinationTitle: "",
  description: "",
  images: [],
  peopleJoined: [],
  createdBy: "",
  travelCost: 0,
};

const createTripPage = () => {
  const [destination, setDestination] = useState(destObject);
  const { data: session } = useSession();

  if (!session || !session?.user) return <p>Sign in to create a trip</p>;

  const createTrip = async () => {
    const response = await fetch(`/api/trip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...destination, createdBy: session?.user?.id }),
    });

    if (!response.ok) alert("Network response was not ok");
    return response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dest = await createTrip();
    console.log(destination);

    console.log(dest);
    setDestination(destObject);
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.heading}>Create Trip!</h2>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.flex}>
            <div className={styles.inputDivs}>
              <label className={styles.label} htmlFor="name">
                DestinationName
              </label>
              <input
                className={styles.input}
                type="text"
                id="destinationName"
                name="destinationName"
                placeholder="Destination Name"
                value={destination.destinationName}
                onChange={(e) =>
                  setDestination({
                    ...destination,
                    destinationName: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.inputDivs}>
              <label className={styles.label} htmlFor="username">
                Destination Title
              </label>
              <input
                className={styles.input}
                type="text"
                id="destinationTitle"
                name="destinationTitle"
                placeholder="Destination Title"
                value={destination.destinationTitle}
                onChange={(e) =>
                  setDestination({
                    ...destination,
                    destinationTitle: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* <div className={styles.flex}>
            <div className={styles.inputDivs}>
              <label className={styles.label} htmlFor="destination">
                Destination{" "}
              </label>
              <input
                className={styles.input}
                type="text"
                id="destination"
                name="destination"
                placeholder="Destination"
              />
              <IoLocation size={24} className={styles.icon} />
            </div>
            <div className={styles.inputDivs}>
              <label className={styles.label} htmlFor="month">
                Month of Travel{" "}
              </label>
              <select className={styles.select} name="month" id="month">
                <option value="January">Choose travel month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
          </div> */}

          <div className={styles.inputDivs}>
            <label className={styles.label} htmlFor="name">
              Description{" "}
            </label>
            <textarea
              className={styles.textarea}
              id="name"
              name="name"
              placeholder="Description"
              rows={10}
              cols={40}
              value={destination.description}
              onChange={(e) =>
                setDestination({ ...destination, description: e.target.value })
              }
            />
          </div>

          <div className={styles.inputDivs}>
            <label className={styles.label} htmlFor="name">
              Travel Count{" "}
            </label>
            <input
              className={styles.input}
              type="number"
              id="name"
              name="name"
              placeholder="Travel count"
              value={destination.travelCost}
              onChange={(e) =>
                setDestination({ ...destination, travelCost: e.target.value })
              }
            />
          </div>

          {/* <div className={styles.inputDivs}>
          <label className={styles.label} htmlFor="image">
            Upload Image here
          </label>
          <input type="file" className={styles.fileInput} />
        </div> */}

          <div>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                console.log("Files: ", res);
                setDestination({
                  ...destination,
                  images: res.map((file) => file.url),
                });
                alert("Upload Completed");
              }}
              onUploadError={(error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>

          <div className={styles.btnContainer}>
            <button type="submit" className={styles.registerBtn}>
              Create Trip
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default createTripPage;
