import { Link } from "react-router-dom";

export const ButtonLink = ({ id, content }) => {
  return (
    <Link
      to={`/character/${id}`}
      className="bg-cyan-500 p-2 w-30 text-white text-center rounded-md cursor-pointer"
    >
      {content}
    </Link>
  );
};
