import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="flex justify-around items-center  text-cyan-500 shadow-xl/30 shadow-cyan-500/50 flex-wrap bg-gray-950  ">
      <img className="my-3" src="/logo.webp" alt="" />
      {/* <h1 className="sm:text-2xl md:text-4xl  py-6 font-bold  "></h1> */}
      <Link
        to={`/`}
        className="bg-cyan-500 p-2 w-30 text-white text-center rounded-md cursor-pointer  "
      >
        Inicio
      </Link>
    </nav>
  );
};
