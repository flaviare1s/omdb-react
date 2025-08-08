import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((movie) => movie.imdbID !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  if (favorites.length === 0) {
    return <p className="text-center mt-10 text-gray-600">No favorite movies yet.</p>;
  }

  return (
    <section className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Favorite Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((movie) => (
          <div key={movie.imdbID} className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden relative">
            <Link to={`/movie/${movie.imdbID}`}>
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x445?text=No+Image'}
                alt={movie.Title}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-lg mb-1">{movie.Title}</h2>
                <p className="text-sm text-gray-600">{movie.Year}</p>
              </div>
            </Link>
            <button
              onClick={() => removeFavorite(movie.imdbID)}
              className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
