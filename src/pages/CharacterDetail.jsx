import { Link, Navigate, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useCharacterById } from "../hooks/useGetCharacter";
import { ButtonMove } from "../components/ButtonMove";
import { Skeleton } from "../components/Skeleton";

export const CharacterDetail = () => {
  const { id } = useParams();
  const { data: character, isPending, isLoadingError } = useCharacterById(id);

  if (isLoadingError) return <Navigate to="/error" />;

  const details = [
    ["Estado", character?.status],
    ["Especie", character?.species],
    ["Tipo", character?.type],
    ["Género", character?.gender],
    ["Origen", character?.origin?.name],
    ["Localización", character?.location?.name],
    ["Creado", character?.created],
  ];

  return (
    <div className="page-shell max-w-5xl py-8 sm:py-12">
      <Link to="/characterlist" className="control mb-4 hover:bg-(--hover)">
        <FiArrowLeft className="text-(--focus)" aria-hidden="true" />
        Volver a personajes
      </Link>
      {isPending && <p className="sr-only" role="status">Cargando personaje…</p>}
      <article
        aria-busy={isPending}
        className="surface grid items-start gap-6 p-4 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:p-6 lg:gap-8"
      >
        {isPending ? (
          <Skeleton className="aspect-square w-full max-w-80 justify-self-center rounded-lg" />
        ) : (
          <img
            className="aspect-square w-full max-w-80 justify-self-center rounded-lg object-cover"
            src={character.image}
            alt={character.name}
            width="300"
            height="300"
          />
        )}
        <div className="min-w-0">
          {isPending ? (
            <div className="flex h-9 items-center sm:h-10">
              <Skeleton className="h-7 w-3/4 rounded" />
            </div>
          ) : (
            <h1 className="wrap-anywhere text-3xl font-bold tracking-tight sm:text-4xl">
              {character.name}
            </h1>
          )}
          <dl className="mt-5 divide-y divide-(--border)" aria-hidden={isPending}>
            {details.map(([label, value]) => (
              <div key={label} className="grid gap-1 py-2.5 text-sm min-[400px]:grid-cols-[7rem_minmax(0,1fr)]">
                <dt className="muted">
                  {isPending ? (
                    <span className="flex h-5 items-center">
                      <Skeleton className="h-3 w-16 rounded" />
                    </span>
                  ) : label}
                </dt>
                <dd className="wrap-anywhere font-medium">
                  {isPending ? (
                    <span className="flex h-5 items-center">
                      <Skeleton className="h-3 w-2/3 max-w-48 rounded" />
                    </span>
                  ) : value || "Desconocido"}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </article>
      <div className="mt-5">
        <ButtonMove id={id} />
      </div>
    </div>
  );
};
