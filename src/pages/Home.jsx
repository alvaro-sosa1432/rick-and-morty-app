import { Protagonist } from "../components/Protagonist";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h2 className="text-center my-10 text-4xl text-cyan-500 font-bold">
        Binvenidos a la App de Rick Y Morty
      </h2>
      <p className="max-w-6xl  mx-auto p-2 text-cyan-500">
        Rick y Morty (en inglés: Rick and Morty) es una serie de televisión
        estadounidense de animación para adultos creada por Justin Roiland y Dan
        Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La
        serie sigue las desventuras de un científico, Rick Sánchez, y su
        fácilmente influenciable nieto, Morty
      </p>
      <Protagonist />
      <div className="flex justify-center py-10 ">
        <Link
          className="bg-cyan-500 p-2 w-auto text-white text-center rounded-md cursor-pointer"
          to="/characterlist"
        >
          Mas Personajes
        </Link>
      </div>
    </div>
  );
};
