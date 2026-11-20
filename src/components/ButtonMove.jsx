import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export const ButtonMove = ({ id }) => {
  const currentId = Number(id);

  return (
    <nav aria-label="Navegación entre personajes" className="flex flex-wrap gap-2">
      {currentId > 1 && (
        <Link to={`/character/${currentId - 1}`} className="control control-secondary">
          <FiArrowLeft aria-hidden="true" />
          Anterior
        </Link>
      )}
      <Link to={`/character/${currentId + 1}`} className="control control-secondary">
        Siguiente
        <FiArrowRight aria-hidden="true" />
      </Link>
    </nav>
  );
};
