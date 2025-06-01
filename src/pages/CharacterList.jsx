import { Card } from "../components/Card";
import { useAllCharacters } from "../hooks/useGetCharacter";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const CharacterList = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const { characters, error, loading } = useAllCharacters();

  if (!characters) {
    <div>
      <p>Cargando...</p>
    </div>;
  }

  if (error) {
    navigate("/error");
  }

  if (loading) {
    <div>
      <p>Cargando Personajes...</p>
    </div>;
  }

  return (
    <div>
      <div className="flex justify-center items-center gap-4  ">
        <input
          className="p-2 my-4 border border-cyan-500 rounded-md outline-none"
          type="text"
          placeholder="Buscar personaje"
        />
        <button className="bg-cyan-500 p-2 w-auto text-white text-center rounded-md cursor-pointer ">
          Buscar personajes
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mx-5">
        {characters.map((character) => (
          <Card key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
};
