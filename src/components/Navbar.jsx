import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-center my-4 gap-5 items-center">
      <Link
        to={`/`}
        className="bg-cyan-500 p-2 w-30 text-white text-center rounded-md cursor-pointer  "
      >
        Inicio
      </Link>
      <Link
        to={`/characterlist`}
        className="bg-cyan-500 p-2 w-auto text-white text-center rounded-md cursor-pointer  "
      >
        Mas Personajes
      </Link>
    </nav>
  );
};
