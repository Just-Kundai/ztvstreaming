import React, { useEffect, useState } from 'react';
import Header from './Header';
import MovieList from './MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://moviesdatabase.p.rapidapi.com/titles/seasons/%7BseriesId%7D');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.log('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>TV Streaming Website</h1>
      <Header />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
