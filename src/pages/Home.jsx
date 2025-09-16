import { Protagonist } from "../components/Protagonist";

export const Home = () => {
  return (
    <div className="dark:bg-gray-950">
      <h2 className="text-center  text-4xl text-teal-500 font-bold py-10">
        Binvenidos a la App de Rick Y Morty
      </h2>
      <p className="max-w-6xl  mx-auto p-2 text-teal-500">
        Rick y Morty (en inglés: Rick and Morty) es una serie de televisión
        estadounidense de animación para adultos creada por Justin Roiland y Dan
        Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La
        serie sigue las desventuras de un científico, Rick Sánchez, y su
        fácilmente influenciable nieto, Morty
      </p>
      <Protagonist />
    </div>
  );
};
