import { Icon } from "@iconify/react";
import { GetProtagonist } from "../stack/GetCharacterStack";
import { Card } from "./Card";
import { useNavigate } from "react-router-dom";

export const Protagonist = () => {
  const { data, isPending, error } = GetProtagonist();

  const navigate = useNavigate();

  if (isPending)
    return (
      <div className="flex justify-center items-center h-screen">
        <Icon
          className="text-teal-500 w-20"
          icon="line-md:loading-loop"
          width="24"
          height="24"
        />
      </div>
    );
  if (error) return navigate("*");

  return (
    <div className="text-center py-20">
      <h1 className=" my-4  font-semibold text-teal-500 sm:text-2xl md:text-3xl">
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
