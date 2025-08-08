import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold text-yellow-500 mb-8">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Página não encontrada</h2>
        <p className="text-lg text-gray-600 mb-8">
          A página que você tentou acessar não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </section>
  );
}
