import { ButtonLink } from "./Button";

export const Card = ({ id, name, image }) => {
  return (
    <div
      key={id}
      className="flex flex-col items-center justify-center flex-wrap h-auto  text-wrap"
    >
      <div className="my-10 p-6 border  border-cyan-500 rounded-md text-center w-60 md:w-auto  ">
        <img
          className="rounded-md w-50 sm:w-60 mx-auto "
          src={image}
          alt={name}
        />
        <h3 className="text-xl text-center p-3 text-cyan-500">{name}</h3>
        <ButtonLink id={id} content="Mas Detalles" />
      </div>
    </div>
  );
};

// className =
//   "  border-cyan-500 border rounded-md p-4 flex flex-col items-center justify-around sm:w-75  md:w-auto h-auto  mx-auto-10";
