"use client";
import ButtonAnimation from "@/Anim/ButtonAnimation";
import CardAnimation from "@/Anim/CardAnimation";
import SuccessModal from "../SuccessModal";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { SlidingCarousel } from "../Carousels/sliding-carousel";

const initialModalObj = {
  header: "",
  msg: "",
  trigger: false,
};

const BuddyCards = ({ dest }) => {
  const session = useSession();
  console.log("session", session);
  const [modalObj, setModalObj] = useState(initialModalObj);

  const createTrip = async () => {
    const {
      destinationName,
      destinationTitle,
      description,
      images,
      travelcost,
    } = dest;

    const response = await fetch(`/api/trip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        destinationName,
        destinationTitle,
        description,
        images,
        travelCost: travelcost,
        peoplejoined: [],
        createdBy: session.data?.user?.id,
      }),
    });

    if (!response.ok) {
      setModalObj({
        header: "Error",
        msg: "Failed to create trip",
        trigger: true,
      });
    }
    if (response.status === 200) {
      setModalObj({
        header: "Success",
        msg: `${destinationName} created as trip successfully`,
        trigger: true,
      });
    }

    return response.json();
  };

  return (
    <>
      {modalObj.trigger && (
        <SuccessModal
          modalObj={modalObj}
          clickFunction={() => setModalObj(initialModalObj)}
        />
      )}
      <CardAnimation>
        <div className="shadow-2xl rounded-lg overflow-hidden">
          <SlidingCarousel images={dest?.images} />

          <div className="flex flex-col gap-4 p-4 text-gray-500">
            <h2 className="font-semibold text-2xl text-black/90">
              {dest?.destinationName}: {dest?.destinationTitle}
            </h2>
            <p className="">{dest?.description}</p>
            <ButtonAnimation
              text="Create Trip"
              clickFunction={createTrip}
              className="bg-blue-600 hover:bg-blue-900 ml-auto px-4 py-2 rounded-lg text-white"
            />
          </div>
        </div>
      </CardAnimation>
    </>
  );
};

export default BuddyCards;
