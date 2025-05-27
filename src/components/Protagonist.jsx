import { useNavigate } from "react-router-dom";
import { Card } from "./Card";
import { useCharacterById } from "../hooks/useGetCharacter";

export const Protagonist = () => {
  const navigate = useNavigate();
  const { character, loading, error } = useCharacterById("1,2");
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
      <h1 className="my-20 font-semibold text-cyan-500 text-3xl">
        Protagonistas
      </h1>
      <div className="flex flex-col md:flex-row items-center wrap-normal md:max-w-3xl md:gap-10 md:justify-center mx-auto my-5  ">
        {character.map((person) => (
          <Card key={person.id} {...person} />
        ))}
      </div>
    </div>
  );
};
