import { Card } from "../components/Card";
import { useAllCharacters } from "../hooks/useGetCharacter";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";

export const CharacterList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";

  const navigate = useNavigate();
  const { characters, error, loading, totalPages } = useAllCharacters(
    search,
    page
  );

  if (!characters) {
    <div>
      <p>Cargando...</p>
    </div>;
  }

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  });

  if (loading) {
    <div>
      <p>Cargando Personajes...</p>
    </div>;
  }

  const handleSearchChange = (e) => {
    setSearchParams({ search: e.target.value, page: 1 });
  };

  const handlePageChange = ({ selected }) => {
    setSearchParams({ search, page: (selected + 1).toString() });
  };

  return (
    <div className="dark:bg-gray-950">
      <div className="flex justify-center items-center gap-4    ">
        <input
          className="p-2 my-4 border w-64  border-teal-500 rounded-md outline-none text-teal-500"
          type="text"
          placeholder="Buscar personaje"
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-5">
        {characters.map((character) => (
          <Card key={character.id} {...character} />
        ))}
      </div>
      <div className="py-6">
        {totalPages > 1 && (
          <button className="flex mx-auto ">
            <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              onPageChange={handlePageChange}
              forcePage={page - 1}
              containerClassName="flex justify-center gap-1 mt-6 cursor-pointer "
              pageClassName="px-3 py-1 border rounded  text-white border border-teal-500 hover:bg-teal-500 transition-colors duration-300 "
              activeClassName=" text-teal-500 border border-teal-500"
              previousClassName="px-3 py-1 border rounded  text-white border border-teal-500 hover:bg-teal-500 transition-colors duration-300"
              nextClassName="px-3 py-1 border rounded  text-white border border-teal-500 hover:bg-teal-500 transition-colors duration-300"
              disabledClassName="opacity-50"
              breakClassName="px-3 py-1"
            />
          </button>
        )}
      </div>
    </div>
  );
};
