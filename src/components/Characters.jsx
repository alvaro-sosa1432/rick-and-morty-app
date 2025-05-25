import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Characters = () => {
  const [family, setFamily] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getFamily = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character/3,4,5"
        );
        if (!response.ok) return navigate("/error");
        const data = await response.json();
        setFamily(data);
      } catch (error) {
        setError(error);
        navigate("/error", {
          state: {
            error: "Error Al cargar el personaje",
            details: error.message,
          },
        });
      } finally {
        setLoading(false);
      }
    };
    getFamily();
  }, [navigate]);

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
        {family.map((fami) => (
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
