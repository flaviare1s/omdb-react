import { FaMoon, FaSun } from "react-icons/fa"
import { Link } from "react-router-dom"
import { ThemeToggle } from "./ThemeToggle"

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center justify-center">
          <Link to="/" className="text-2xl font-bold text-yellow-400"><span className="text-3xl">📽️</span> MovieFinder</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-yellow-400 transition">Search</Link>
          <Link to="/favorites" className="hover:text-yellow-400 transition">Favorites</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
