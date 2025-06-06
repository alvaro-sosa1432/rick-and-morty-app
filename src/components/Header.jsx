import { CiDark, CiLight } from "react-icons/ci";
import { useState, useEffect } from "react";

export const Header = () => {
  const preferenceColors = window.matchMedia(
    "prefers-color-scheme: dark"
  ).matches;

  const [theme, setTheme] = useState(preferenceColors ? "dark" : "light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <header className="flex justify-around items-center  text-cyan-500 shadow-xl/30 shadow-cyan-500/50 flex-wrap dark:bg-gray-950    ">
      <img className="my-3" src="/logo.webp" alt="" />
      <button onClick={handleTheme}>
        {theme === "light" ? (
          <CiDark className="text-cyan-500  text-3xl hover:bg-cyan-500 w-10 h-10 hover:text-white rounded-full  " />
        ) : (
          <CiLight className="text-cyan-500  text-3xl hover:bg-cyan-500 w-10 h-10 hover:text-white rounded-full  " />
        )}
      </button>
    </header>
  );
};
