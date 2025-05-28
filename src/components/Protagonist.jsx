import { useNavigate } from "react-router-dom";
import { Card } from "./Card";
import { useCharacterById } from "../hooks/useGetCharacter";

export const Protagonist = () => {
  const navigate = useNavigate();
  const { character, loading, error } = useCharacterById("1,2,3,4,5");
  if (!character) {
    <div>Cargando ...</div>;
  }

  if (loading) {
    <div>Cargando Personajes...</div>;
  }

  if (error) {
    navigate("/error");
  }

  return (
    <div className="text-center">
      <h1 className=" my-4  font-semibold text-cyan-500 sm:text-2xl md:text-3xl">
        Protagonistas
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5  md:gap-10 md:justify-center m-5  ">
        {character.map((person) => (
          <Card key={person.id} {...person} />
        ))}
      </div>
    </div>
  );
};
