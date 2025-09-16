import { ButtonLink } from "./Button";

export const Card = ({ id, name, image }) => {
  return (
    <div
      key={id}
      className="flex flex-col items-center justify-center flex-wrap h-auto  text-wrap"
    >
      <div className="my-10  border  border-teal-200 rounded-lg text-center w-60 md:w-auto  ">
        <img className="rounded-t-lg w-full mx-auto " src={image} alt={name} />
        <div className="my-5 flex flex-col justify-center items-center gap-4">
          <h3 className=" sm:text-sm lg:text-xl text-center text-wrap  text-teal-500">
            {name}
          </h3>
          <ButtonLink id={id} content="Mas Detalles" />
        </div>
      </div>
    </div>
  );
};

// className =
//   "  border-teal-500 border rounded-md p-4 flex flex-col items-center justify-around sm:w-75  md:w-auto h-auto  mx-auto-10";
