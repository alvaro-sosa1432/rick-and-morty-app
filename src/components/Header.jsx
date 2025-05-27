import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="flex justify-around items-center  text-cyan-500 border-b border-cyan-500 flex-wrap   ">
      <h1 className="sm:text-2xl md:text-4xl  py-6 font-bold  ">
        Rick And Morty App
      </h1>
      <Link
        to={`/`}
        className="bg-cyan-500 p-2 w-30 text-white text-center rounded-md cursor-pointer  "
      >
        Inicio
      </Link>
    </nav>
  );
};
