import { Link } from "react-router-dom";

export const ButtonLink = ({ id, content }) => {
  return (
    <Link
      to={`/character/${id}`}
      className="bg-teal-500 p-2 w-40 hover:bg-teal-700 transition-colors duration-300 text-white text-center rounded-md cursor-pointer w  "
    >
      {content}
    </Link>
  );
};
