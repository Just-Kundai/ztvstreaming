import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, poster, genre, rating } = movie;

  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-card__poster" />
      <div className="movie-card__details">
        <h2 className="movie-card__title">{title}</h2>
        <p className="movie-card__genre">{genre}</p>
        <p className="movie-card__rating">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
