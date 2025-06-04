import { Card } from "../components/Card";
import { useAllCharacters } from "../hooks/useGetCharacter";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const CharacterList = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const { characters, error, loading } = useAllCharacters(search);

  if (!characters) {
    <div>
      <p>Cargando...</p>
    </div>;
  }

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  });

  if (loading) {
    <div>
      <p>Cargando Personajes...</p>
    </div>;
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-4  ">
        <input
          className="p-2 my-4 border border-cyan-500 rounded-md outline-none"
          type="text"
          placeholder="Buscar personaje"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mx-5">
        {characters.map((character) => (
          <Card key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
};
