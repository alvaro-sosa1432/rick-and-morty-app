import { Link } from "react-router-dom";

export const ButtonMove = ({ id }) => {
  const currentId = Number(id);

  return (
    <div className="flex gap-2">
      {currentId > 1 && (
        <Link
          to={`/character/${currentId - 1}`}
          className="bg-cyan-500 p-2 w-30 text-white text-center rounded-md cursor-pointer"
        >
          Anterior
        </Link>
      )}
      <Link
        to={`/character/${currentId + 1}`}
        className="bg-cyan-500 p-2 w-30 text-white text-center rounded-md cursor-pointer"
      >
        Siguiente
      </Link>
    </div>
  );
};
