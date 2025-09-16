import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className=" hidden  justify-center  gap-5 items-center dark:bg-gray-950">
      {currentPath !== "/" && (
        <Link
          to={`/`}
          className="bg-teal-500 p-2 w-40 text-white text-center rounded-md cursor-pointer hover:bg-teal-700 transition-colors duration-300  "
        >
          Inicio
        </Link>
      )}

      {currentPath !== "/characterlist" && (
        <Link
          to={`/characterlist`}
          className="bg-teal-500 p-2 w-40 text-white text-center rounded-md cursor-pointer  hover:bg-teal-700 transition-colors duration-300  "
        >
          Mas Personajes
        </Link>
      )}
    </nav>
  );
};
