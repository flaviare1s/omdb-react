import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import FavoritesPage from './pages/FavoritesPage';
import Home from './pages/Home';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
