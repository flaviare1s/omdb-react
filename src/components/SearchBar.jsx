// src/components/SearchBar.jsx
import React from 'react';

export const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-4 mb-8">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies..."
        className="w-full sm:w-2/3 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
      />
      <button
        type="submit"
        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
      >
        Search
      </button>
    </form>
  );
};
