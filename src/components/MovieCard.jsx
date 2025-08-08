// src/components/MovieCard.jsx
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, isFavorite, toggleFavorite }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden relative">
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x445?text=No+Image'}
          alt={movie.Title}
          className="w-full h-72 object-cover"
        />
      </Link>
      <div className="p-4 flex flex-col gap-1">
        <h2 className="font-bold text-lg">{movie.Title}</h2>
        <p className="text-sm text-gray-600">{movie.Year}</p>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(movie);
        }}
        className="absolute top-2 right-2 text-white p-2 rounded-full z-10 cursor-pointer"
      >
        {isFavorite ?
          <FaHeart className="text-red-500 text-2xl" /> :
          <FaRegHeart className="text-white text-2xl" />
        }
      </button>
    </div>
  );
};
