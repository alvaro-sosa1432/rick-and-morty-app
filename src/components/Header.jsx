import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HamburgerMenu } from "./HambugerMenu";

export const Header = () => {
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <header className="sticky top-0 z-20 border-b border-(--border) bg-(--surface)">
      <div className="page-shell grid h-16 grid-cols-[1fr_auto_1fr] items-center">
        <HamburgerMenu />
        <Link to="/" aria-label="Rick and Morty, inicio" className="rounded-lg">
          <img className="w-28 sm:w-36" src="/logo.webp" alt="" />
        </Link>
        <button
          type="button"
          onClick={handleTheme}
          className="control min-w-11 justify-self-end hover:bg-(--hover)"
          aria-label={theme === "light" ? "Activar tema oscuro" : "Activar tema claro"}
        >
          {theme === "light" ? <FiMoon size={20} aria-hidden="true" /> : <FiSun size={20} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
};
