import { Link } from "react-router-dom";

export const ButtonLink = ({ id, content, label }) => {
  return (
    <Link
      to={`/character/${id}`}
      className="control control-secondary mt-auto"
      aria-label={label}
    >
      {content}
    </Link>
  );
};
