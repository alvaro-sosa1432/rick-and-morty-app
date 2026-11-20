import { useQuery } from "@tanstack/react-query";

const URL = "https://rickandmortyapi.com/api/character";

export const useCharacterById = (id) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: async ({ signal }) => {
      const response = await fetch(`${URL}/${id}`, { signal });
      if (!response.ok) throw new Error("No se pudo cargar el personaje");
      return response.json();
    },
    retry: false,
  });
};

export const useAllCharacters = (name, page) => {
  return useQuery({
    queryKey: ["characters", name, page],
    queryFn: async ({ signal }) => {
      const params = new URLSearchParams({ page });
      if (name) params.set("name", name);

      const response = await fetch(`${URL}/?${params}`, { signal });
      if (response.status === 404) return { characters: [], totalPages: 1 };
      if (!response.ok) throw new Error("No se pudieron cargar los personajes");

      const data = await response.json();
      return {
        characters: data.results ?? [],
        totalPages: data.info?.pages ?? 1,
      };
    },
    placeholderData: (previousData, previousQuery) =>
      previousQuery?.queryKey[1] === name ? previousData : undefined,
    retry: false,
  });
};
