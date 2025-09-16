import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      <button
        onClick={toggleMenu}
        className="p-4 focus:outline-none "
        aria-label="Menú principal"
        aria-expanded={isOpen}
      >
        <div className="w-6 h-6 flex items-center ">
          <div className="">
            <Icon
              className="cursor-pointer  p-2 hover:bg-gray-950 hover:dark:bg-white rounded-full transition-colors duration-300 "
              icon="line-md:menu"
              width="50"
              height="50"
            />
          </div>
        </div>
      </button>

      {/* Menú desplegable */}
      <div
        className={`absolute  left-5 right-0 mt-4 w-48 bg-white dark:bg-gray-950 rounded-md shadow-lg py-1 z-50 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible transform translate-y-0"
            : "opacity-0 invisible transform -translate-y-2"
        }`}
      >
        <div className="flex flex-col gap-3 p-4">
          {currentPath !== "/" && (
            <Link to={`/`} className="hover:text-teal-300">
              Inicio
            </Link>
          )}

          {currentPath !== "/characterlist" && (
            <Link to={`/characterlist`} className="hover:text-teal-300">
              Mas Personajes
            </Link>
          )}
        </div>
      </div>

      {/* Overlay para cerrar al hacer clic fuera del menú */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40  bg-opacity-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};
