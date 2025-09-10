import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-950 text-teal-500 gap-2 ">
      <h2 className="text-2xl md:text-4xl">404 Not Found!</h2>
      <p>Ups, Ocurrio un error.</p>
      <button
        onClick={() => navigate("/")}
        className="border border-teal-500 rounded-lg w-1/6 py-2 hover:bg-teal-500 hover:text-white cursor-pointer trasition-colors duration-300 "
      >
        Inicio
      </button>
    </div>
  );
};
