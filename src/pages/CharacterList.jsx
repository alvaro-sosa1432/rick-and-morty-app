import { FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";
import { Navigate, useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Card } from "../components/Card";
import { CardSkeleton } from "../components/Skeleton";
import { useAllCharacters } from "../hooks/useGetCharacter";

const paginationLink = "control control-secondary pagination-link";

export const CharacterList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(1, parseInt(searchParams.get("page"), 10) || 1);
  const search = searchParams.get("search") || "";
  const { data, isPending, isPlaceholderData, isLoadingError } = useAllCharacters(search, page);
  const { characters = [], totalPages = 1 } = data ?? {};

  if (isLoadingError) return <Navigate to="/error" />;

  const handleSearchChange = (event) => {
    setSearchParams({ search: event.target.value, page: 1 });
  };

  const handlePageChange = ({ selected }) => {
    setSearchParams({ search, page: (selected + 1).toString() });
  };

  return (
    <section aria-labelledby="characters-heading" className="page-shell py-8 sm:py-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h1 id="characters-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Personajes
        </h1>
        <div className="relative w-full sm:max-w-xs">
          <label htmlFor="character-search" className="sr-only">Buscar personaje</label>
          <FiSearch aria-hidden="true" className="muted pointer-events-none absolute top-1/2 left-3 -translate-y-1/2" />
          <input
            className="min-h-11 w-full rounded-lg border border-(--control-border) bg-(--surface) py-2 pr-3 pl-9 placeholder:text-(--muted)"
            id="character-search"
            type="search"
            placeholder="Buscar personaje"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {(isPending || isPlaceholderData) && (
        <p className="sr-only" role="status">Cargando personajes…</p>
      )}
      <section aria-labelledby="results-heading" aria-busy={isPending || isPlaceholderData}>
        <h2 id="results-heading" className="sr-only">Resultados</h2>
        {!isPending && characters.length === 0 ? (
          <p className="surface muted p-5" role="status">No se encontraron personajes.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {isPending
              ? Array.from({ length: search ? 4 : 20 }, (_, index) => <CardSkeleton key={index} />)
              : characters.map((character) => <Card key={character.id} {...character} />)}
          </div>
        )}
      </section>

      {totalPages > 1 && page <= totalPages && (
        <nav aria-label="Paginación de personajes" className="mt-8">
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            forcePage={page - 1}
            hrefBuilder={(targetPage) =>
              `#/characterlist?${new URLSearchParams({ search, page: targetPage })}`
            }
            containerClassName="flex flex-wrap justify-center gap-2"
            pageLinkClassName={paginationLink}
            previousLinkClassName={paginationLink}
            nextLinkClassName={paginationLink}
            disabledClassName="pagination-disabled"
            breakLinkClassName="control pagination-link muted hover:bg-(--hover)"
            breakAriaLabels={{ backward: "Retroceder páginas", forward: "Avanzar páginas" }}
            previousLabel={<FiChevronLeft size={18} aria-hidden="true" />}
            nextLabel={<FiChevronRight size={18} aria-hidden="true" />}
            previousAriaLabel="Página anterior"
            nextAriaLabel="Página siguiente"
            ariaLabelBuilder={(targetPage) => `Página ${targetPage}`}
          />
        </nav>
      )}
    </section>
  );
};
