import { useQuery } from "@tanstack/react-query";
import Trip from "@/models/Trip";

export const useUsers = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["User"],
    queryFn: async () => {
      const response = await fetch(`/api/user`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return { data, error, isLoading, isError };
};

export const useDestinations = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["Destination"],
    queryFn: async () => {
      const response = await fetch(`/api/destination`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return { data, error, isLoading, isError };
};

export const getTrips = async () => {
  const {
    data: trips,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["Trip"],
    queryFn: async () => {
      await connectDB();
      const trips = await Trip.find({}).populate([
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

      return trips;
    },
  });

  return { trips, isLoading, isError, error };
};
