import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=full`);
        if (response.data.Response === 'True') {
          setMovie(response.data);
          setError(null);
        } else {
          setError(response.data.Error);
        }
      } catch (err) {
        setError('Failed to load movie details.', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <section className="max-w-5xl mx-auto p-6 bg-white rounded shadow mt-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x445?text=No+Image'}
          alt={movie.Title}
          className="w-full md:w-64 h-auto rounded shadow"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{movie.Title} ({movie.Year})</h1>
          <p className="text-gray-700 italic mb-4">{movie.Genre} | {movie.Runtime} | Rated {movie.Rated}</p>
          <p className="text-gray-800 mb-4">{movie.Plot}</p>

          <ul className="text-sm text-gray-600 space-y-1">
            <li><strong>Director:</strong> {movie.Director}</li>
            <li><strong>Writer:</strong> {movie.Writer}</li>
            <li><strong>Actors:</strong> {movie.Actors}</li>
            <li><strong>Language:</strong> {movie.Language}</li>
            <li><strong>Released:</strong> {movie.Released}</li>
            <li><strong>IMDb Rating:</strong> {movie.imdbRating}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
