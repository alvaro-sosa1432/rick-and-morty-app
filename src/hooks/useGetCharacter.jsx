import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const URL = `https://rickandmortyapi.com/api/character`;

export const useCharacterById = (id) => {
  const navigate = useNavigate();
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        if (!response.ok) {
          navigate("/error", { state: { error: "Personaje no Encontrado" } });
        }
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        setError(error);
        navigate("/error", {
          state: { error: "Error al Cargar el personaje" },
        });
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [id, navigate]);
  return { character, loading, error };
};

export const useAllCharacters = (name, page) => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}${
            name ? `&name=${name}` : ""
          }`
        );
        if (!response) {
          navigate("/error", { state: { error: "Personaje no Encontrado" } });
        }
        const data = await response.json();
        setCharacters(data.results || []);
        setTotalPages(data.info?.pages || 1);
      } catch (error) {
        setError(error);
        navigate("/error", {
          state: { error: "Error al Cargar el personaje" },
        });
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [navigate, name, page]);
  return { characters, loading, error, totalPages };
};
