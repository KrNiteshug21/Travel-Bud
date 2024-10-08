"use client";
import ButtonAnimation from "@/Anim/ButtonAnimation";
import { UploadButton } from "@/hooks/uploadthing";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";

const destObject = {
  destinationName: "",
  destinationTitle: "",
  description: "",
  images: [],
  peopleJoined: [],
  createdBy: "",
  travelCost: 0,
};

const CreateTripPage = () => {
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
    await createTrip();
    setDestination(destObject);
  };

  return (
    <section className="flex justify-center items-center mx-auto max-w-screen-xl min-h-screen">
      <div className="flex-auto border-2 shadow-xl backdrop-blur-md p-4 rounded-lg max-w-xl">
        <h2 className="mb-4 font-semibold text-2xl text-center">
          Create Trip!
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex gap-4">
            <div className="relative flex flex-auto justify-between w-full">
              <label className="hidden" htmlFor="name">
                DestinationName
              </label>
              <input
                className="border-gray-500 shadow px-3 py-1 border-b-2 rounded w-full text-base outline-none"
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
            <div className="relative flex flex-auto justify-between w-full">
              <label className="hidden" htmlFor="username">
                Destination Title
              </label>
              <input
                className="border-gray-500 shadow px-3 py-1 border-b-2 rounded w-full text-base outline-none"
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

          <div className="relative flex flex-auto justify-between w-full">
            <label className="hidden" htmlFor="name">
              Description{" "}
            </label>
            <textarea
              className="border-gray-500 shadow px-3 py-1 border-b-2 rounded w-full text-base outline-none"
              id="name"
              name="name"
              placeholder="Description"
              rows={7}
              cols={20}
              value={destination.description}
              onChange={(e) =>
                setDestination({ ...destination, description: e.target.value })
              }
            />
          </div>

          <div className="relative flex flex-auto justify-between w-full">
            <label className="hidden" htmlFor="name">
              Travel Count{" "}
            </label>
            <input
              className="border-gray-500 shadow px-3 py-1 border-b-2 rounded w-full text-base outline-none"
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

          <div className="space-y-2">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
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
            <div className="flex justify-center items-center gap-4">
              {destination.images.length > 0 &&
                destination.images.map((image, index) => (
                  <Image
                    src={image}
                    alt={index}
                    key={index}
                    width={100}
                    height={100}
                    className="rounded w-48 h-24 overflow-hidden object-center object-cover"
                  />
                ))}
            </div>
          </div>

          <div className="mx-auto">
            <ButtonAnimation
              text="Create Trip"
              type="submit"
              className="bg-blue-700 px-4 py-2 rounded w-40 text-lg text-white cursor-pointer"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateTripPage;
