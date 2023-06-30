import React, { useEffect, useState } from 'react';
import Header from './Header';
import MovieList from './MovieList';

const App = () => {

  const handleSearch = searchTerm => {
  // Perform search logic based on the searchTerm
  const filteredMovies = movies.filter(movie => {
    const movieTitle = movie.title.toLowerCase();
    const searchQuery = searchTerm.toLowerCase();
    return movieTitle.includes(searchQuery);
  });

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
      <h1>TV Streaming Website cslled z-streaming</h1>
      <SearchBar onSearch={handleSearch} />
      <Header />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
