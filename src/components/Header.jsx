import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="flex justify-center items-center gap-5 text-cyan-500 border-b border-cyan-500 flex-wrap ">
      <h1 className="text-4xl py-6 font-bold   ">Rick And Morty App</h1>
      <div>
        <Link
          to="/"
          className="font-semibold bg-cyan-500 p-4 text-white rounded-md cursor-pointer"
        >
          Inicio
        </Link>
      </div>
    </nav>
  );
};
