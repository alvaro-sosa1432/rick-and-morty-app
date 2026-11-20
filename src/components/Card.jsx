import { ButtonLink } from "./Button";

export const Card = ({ id, name, image }) => {
  return (
    <article className="surface flex min-w-0 flex-col motion-safe:transition-colors hover:border-(--control-border) focus-within:border-(--focus)">
      <img
        className="aspect-square w-full rounded-t-[calc(var(--radius-xl)-1px)] object-cover"
        src={image}
        alt={name}
        width="300"
        height="300"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col items-start gap-4 p-4">
        <h3 className="wrap-anywhere text-base font-semibold leading-snug">{name}</h3>
        <ButtonLink id={id} content="Ver detalles" label={`Ver detalles de ${name}`} />
      </div>
    </article>
  );
};
