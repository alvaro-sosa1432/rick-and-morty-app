import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="flex justify-center py-10 gap-5 items-center dark:bg-gray-950">
      {currentPath !== "/" && (
        <Link
          to={`/`}
          className="bg-cyan-500 p-2 w-30 text-white text-center rounded-md cursor-pointer  "
        >
          Inicio
        </Link>
      )}

      {currentPath !== "/characterlist" && (
        <Link
          to={`/characterlist`}
          className="bg-cyan-500 p-2 w-auto text-white text-center rounded-md cursor-pointer  "
        >
          Mas Personajes
        </Link>
      )}
    </nav>
  );
};
