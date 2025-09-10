import { useQuery } from "@tanstack/react-query";

export const GetProtagonist = () => {
  const fetchProtagonist = async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/1,2,3,4,5"
    );
    return response.json();
  };

  return useQuery({
    queryKey: ["Mostrando A los protagonistas"],
    queryFn: fetchProtagonist,
  });
};
