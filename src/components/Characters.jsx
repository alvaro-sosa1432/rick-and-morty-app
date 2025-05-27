import { useNavigate, Link } from "react-router-dom";
import { useCharacterById } from "../hooks/useGetCharacter";

export const Characters = () => {
  const navigate = useNavigate();
  const { character, loading, error } = useCharacterById("3,4,5");

  if (loading) {
    <div>
      <h2>Cargando Personaje...</h2>
    </div>;
  }

  if (error) {
    navigate("/error", {
      state: {
        error: "Error al cargar el personaje",
        details: error.message,
      },
    });
  }

  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold text-cyan-500">Familia </h2>
      <div className="flex flex-col md:flex-row items-center wrap-normal my-10  md:gap-10 md:justify-center mx-auto">
        {character.map((fami) => (
          <div
            key={fami.id}
            className="m-4 border-cyan-500 bg-white border rounded-md p-4 flex flex-col items-center text-cyan-500 "
          >
            <img
              className="rounded-md w-60 "
              src={fami.image}
              alt={fami.name}
            />
            <h3 className="text-2xl text-center p-3 ">{fami.name}</h3>
            <Link
              to={`character/${fami.id}`}
              className="bg-cyan-500 p-2 w-30 text-white text-center rounded-md cursor-pointer"
            >
              Ver Mas
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
