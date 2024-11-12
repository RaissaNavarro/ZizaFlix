import React, { useState } from 'react';
import estilos from './Card.module.css';

export function Card({ movie, isSelected, onCardClick }) {
  return (
    <div
      className={`${estilos.conteiner} ${isSelected ? estilos.expanded : ''}`}
      onClick={() => onCardClick(movie)}
    >
      <h3>{movie.title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className={isSelected ? estilos.expandedImage : ''}
      />
      <p>{movie.overview}</p>
    </div>
  );
}

export function CardList({ movies }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (movie) => {
    // Alterna entre expandir e desexpandir o card
    setSelectedMovie(selectedMovie === movie.id ? null : movie.id);
  };

  return (
    <div className={estilos.container}>
      {movies.map((movie) => (
        <Card
          key={movie.id}
          movie={movie}
          isSelected={selectedMovie === movie.id}
          onCardClick={handleCardClick}
        />
      ))}

      {/* Se um filme for selecionado, desfoca o fundo */}
      {selectedMovie && <div className={estilos.overlay}></div>}
    </div>
  );
}
