import { Link } from "react-router-dom";

export const ButtonMove = ({ id }) => {
  const currentId = Number(id);

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      {currentId > 1 && (
        <Link
          to={`/character/${currentId - 1}`}
          className="bg-teal-500 p-2 w-40 text-white text-center rounded-md cursor-pointer hover:bg-teal-700 transition-colors duration-300  "
        >
          Anterior
        </Link>
      )}
      <Link
        to={`/character/${currentId + 1}`}
        className="bg-teal-500 p-2 w-40 text-white text-center rounded-md cursor-pointer  hover:bg-teal-700 transition-colors duration-300"
      >
        Siguiente
      </Link>
    </div>
  );
};
