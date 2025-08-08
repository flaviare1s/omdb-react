import { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieCard } from '../components/MovieCard';
import { PreviousButton } from '../components/PreviousButton';
import { NextButton } from '../components/NextButton';
import { Loader } from '../components/Loader';
import { useScreenSize } from '../assets/hooks/useScreenSize';
import { SearchBar } from '../components/SearchBar';

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const { width } = useScreenSize();
  const [renderableMovies, setRenderableMovies] = useState([]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (movie) => {
    const isAlreadyFavorite = favorites.some(fav => fav.imdbID === movie.imdbID);
    if (isAlreadyFavorite) {
      setFavorites(favorites.filter(fav => fav.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  useEffect(() => {
    if (!searchTerm) {
      setMovies([]);
      setTotalPages(1);
      setTotalResults(0);
      return;
    }

    const controller = new AbortController();
    const { signal } = controller;

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&page=${page}`, { signal });
        if (response.data.Response === 'True') {
          setMovies(response.data.Search);
          setTotalPages(Math.ceil(Number(response.data.totalResults) / 10));
          setTotalResults(Number(response.data.totalResults));
          setError(null); // Limpa o erro em caso de sucesso
        } else {
          setMovies([]);
          setError(response.data.Error);
          setTotalPages(1);
          setTotalResults(0);
        }
      } catch (err) {
        if (err.name !== 'CanceledError') {
          setError('Failed to fetch movies.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [page, searchTerm]);

  useEffect(() => {
    if (movies.length === 0) {
      setRenderableMovies([]);
      return;
    }

    let limit = 10;
    if (width >= 1280) {
      limit = 8;
    } else if (width >= 1024) {
      limit = 9;
    }

    setRenderableMovies(movies.slice(0, limit));
  }, [movies, width]);

  return (
    <section className="max-w-6xl mx-auto p-4">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />

      {loading && <div className="text-center my-4"><Loader /></div>}
      {error && <p className="text-center text-red-500 my-4">{error}</p>}

      {totalResults > 0 && (
        <p className="text-center text-gray-700 my-4">
          Found <span className="font-bold">{totalResults}</span> results.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {renderableMovies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isFavorite={favorites.some(fav => fav.imdbID === movie.imdbID)}
            toggleFavorite={handleToggleFavorite}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <PreviousButton page={page} setPage={setPage} />
          <span className="text-gray-700 font-medium">Page {page} of {totalPages}</span>
          <NextButton page={page} setPage={setPage} totalPages={totalPages} />
        </div>
      )}
    </section>
  );
}
