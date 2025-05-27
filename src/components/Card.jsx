import { ButtonLink } from "./Button";

export const Card = ({ id, name, image }) => {
  return (
    <div
      key={id}
      className="m-4 border-cyan-500 border rounded-md p-4 flex flex-col items-center h-110"
    >
      <img className="rounded-md w-60 md:w-90" src={image} alt={name} />
      <h3 className="text-2xl text-center p-3 text-cyan-500">{name}</h3>
      <ButtonLink id={id} content="Mas Detalles" />
    </div>
  );
};
