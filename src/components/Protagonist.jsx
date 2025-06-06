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
    <div className="text-center py-20">
      <h1 className=" my-4  font-semibold text-cyan-500 sm:text-2xl md:text-3xl">
        Protagonistas
      </h1>
      <div className="flex flex-col flex-wrap sm:flex-row gap-5 sm:justify-center ">
        {character.map((person) => (
          <Card key={person.id} {...person} />
        ))}
      </div>
    </div>
  );
};
