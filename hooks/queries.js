import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";

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
