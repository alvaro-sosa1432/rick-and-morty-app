import { useId, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef(null);
  const { pathname } = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <div
      className="relative justify-self-start"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          closeMenu();
          buttonRef.current?.focus();
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="control relative z-10 min-w-11 hover:bg-(--hover)"
        aria-label="Menú principal"
        aria-expanded={isOpen}
        aria-controls={menuId}
      >
        {isOpen ? <FiX size={20} aria-hidden="true" /> : <FiMenu size={20} aria-hidden="true" />}
      </button>
      {isOpen && (
        <div className="fixed inset-0" aria-hidden="true" onClick={closeMenu} />
      )}
      <nav
        id={menuId}
        aria-label="Navegación principal"
        hidden={!isOpen}
        className="surface absolute left-0 top-full z-10 mt-3 w-48 p-2 shadow-sm"
      >
        {pathname !== "/" && (
          <Link to="/" onClick={closeMenu} className="control w-full justify-start hover:bg-(--hover)">
            Inicio
          </Link>
        )}
        {pathname !== "/characterlist" && (
          <Link to="/characterlist" onClick={closeMenu} className="control w-full justify-start hover:bg-(--hover)">
            Más personajes
          </Link>
        )}
      </nav>
    </div>
  );
};
