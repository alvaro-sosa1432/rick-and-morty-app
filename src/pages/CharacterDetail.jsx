import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { NotFound } from "./NotFound";

export const CharacterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        if (!response.ok) {
          navigate("/error", { state: { error: "Personaje no encontrado" } });
        }
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        setError(error);
        navigate("/error", {
          state: {
            error: "Error al cargar el personaje",
            details: error.message,
          },
        });
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [id, navigate]);

  if (loading)
    return <div className="text-center p-4">Cargando personaje...</div>;
  if (error) {
    navigate(<NotFound error={error} />);
  }
  if (!character) {
    <div>Cargando ...</div>;
  }

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen md:justify-center   ">
      <div className=" flex flex-col items-center md:justify-center md:items-center ">
        <img
          className="w-50 md:w-70 rounded-md my-10 mx-auto"
          src={character.image}
          alt={character.name}
        />
        <h1 className=" text-center text-3xl md:text-4xl font-semibold text-cyan-400">
          Nombre: {character.name}
        </h1>
      </div>
      <section className="my-5 text-cyan-500 md:text-2xl">
        <p>Creado: {character.created}</p>
        <p>Estado: {character.status || "Desconocido"}</p>
        <p>Especie: {character.species}</p>
        <p>Tipo: {character.type || "Desconocido"}</p>
        <p>Genero: {character.gender}</p>
        <p>Origin: {character.origin.name}</p>
        <p>Localizacion: {character.location.name}</p>
      </section>
    </div>
  );
};
