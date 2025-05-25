import { Link } from "react-router-dom";

export const Card = ({ id, name, image }) => {
  return (
    <div
      key={id}
      className="m-4 border-cyan-500 border rounded-md p-4 flex flex-col items-center"
    >
      <img className="rounded-md w-60" src={image} alt={name} />
      <h3 className="text-2xl text-center p-3 text-cyan-500">{name}</h3>
      <Link
        to={`/character/${id}`}
        className="bg-cyan-500 p-2 w-30 text-center rounded-md cursor-pointer"
      >
        Ver Mas
      </Link>
    </div>
  );
};
