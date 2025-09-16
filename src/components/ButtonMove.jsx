import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const ButtonMove = ({ id }) => {
  const currentId = Number(id);

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      {currentId > 1 && (
        <Link
          to={`/character/${currentId - 1}`}
          className="bg-teal-500 p-2 w-40 text-white text-center rounded-md cursor-pointer hover:bg-teal-700 transition-colors duration-300 flex justify-center "
        >
          <Icon icon="ooui:arrow-previous-ltr" width="20" height="20" />
        </Link>
      )}
      <Link
        to={`/character/${currentId + 1}`}
        className="bg-teal-500 p-2 w-40 text-white text-center rounded-md cursor-pointer  hover:bg-teal-700 transition-colors duration-300 flex justify-center"
      >
        <Icon icon="ooui:arrow-previous-rtl" width="20" height="20" />
      </Link>
    </div>
  );
};
