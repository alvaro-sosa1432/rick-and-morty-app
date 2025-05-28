import { Card } from "../components/Card";
import { useAllCharacters } from "../hooks/useGetCharacter";
import { useNavigate } from "react-router-dom";

export const CharacterList = () => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 m-5">
      {characters.map((character) => (
        <Card key={character.id} {...character} />
      ))}
    </div>
  );
};
