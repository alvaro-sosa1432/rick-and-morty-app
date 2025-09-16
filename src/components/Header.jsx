import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
// import { Navbar } from "./Navbar";
import { HamburgerMenu } from "./HambugerMenu";

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
    <header className="flex justify-around items-center bg-white text-teal-500 shadow-xl/30 shadow-teal-500/50 flex-wrap dark:bg-gray-950  w-full sticky top-0 z-10    ">
      <div className="">
        <HamburgerMenu />
      </div>
      <img className="my-3 w-30 sm:w-50 " src="/logo.webp" alt="" />
      {/* <Navbar /> */}

      <button onClick={handleTheme}>
        {theme === "light" ? (
          <Icon
            className=" p-2 cursor-pointer hover:bg-gray-950 transition-colors duration-300 rounded-full "
            icon="line-md:moon-simple"
            width="50"
            height="50"
          />
        ) : (
          <Icon
            className="p-2 cursor-pointer hover:bg-white rounded-full transition-colors duration-300"
            icon="line-md:sunny-outline"
            width="50"
            height="50"
          />
        )}
      </button>
    </header>
  );
};
