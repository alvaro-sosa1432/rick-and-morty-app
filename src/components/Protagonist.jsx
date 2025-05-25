import { useState, useEffect } from "react";
import { Card } from "./Card";

export const Protagonist = () => {
  const URL = "https://rickandmortyapi.com/api/character/1,2";
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters();
  }, []);

  return (
    <div className="text-center">
      <h1 className="my-20 font-semibold text-cyan-500 text-3xl">
        Protagonistas
      </h1>
      <div className="flex flex-col md:flex-row items-center wrap-normal md:max-w-3xl md:gap-10 md:justify-center mx-auto my-20  ">
        {character.map((person) => (
          <Card key={person.id} {...person} />
        ))}
      </div>
    </div>
  );
};
