import React, { useState, useEffect } from "react";
import { Grid, CircularProgress, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import { getPopularMovies } from "../services/tmdbApi";

function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data.results);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Grid container spacing={4} justifyContent="center"sx={{marginLeft:-1}}>
      {movies.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={2.8}>
          <MovieCard
            title={movie.title}
            releaseDate={movie.release_date}
            posterPath={movie.poster_path}
            rating={movie.vote_average}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieGrid;