import { GetProtagonist } from "../stack/GetCharacterStack";
import { Card } from "./Card";
import { useNavigate } from "react-router-dom";

export const Protagonist = () => {
  const { data, isPending, error } = GetProtagonist();

  const navigate = useNavigate();

  if (isPending) return <p>...Loading</p>;
  if (error) return navigate("*");

  return (
    <div className="text-center py-20">
      <h1 className=" my-4  font-semibold text-cyan-500 sm:text-2xl md:text-3xl">
        Protagonistas
      </h1>
      <div className="flex flex-col flex-wrap sm:flex-row gap-5 sm:justify-center ">
        {data?.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </div>
    </div>
  );
};
