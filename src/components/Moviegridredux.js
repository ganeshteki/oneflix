// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchMovies,
//   addMovie,
//   removeMovie,
//   updateMovie,
//   clearMovies,
// } from "../redux/movieActions";
// import "./MovieGrid.css";

// const MovieGridRedux = () => {
//   const dispatch = useDispatch();
//   const movies = useSelector((state) => state.movies.movies);

//   useEffect(() => {
//     dispatch(fetchMovies());
//   }, [dispatch]);

//   const handleAddMovie = () => {
//     const newMovie = {
//       id: new Date().getTime(), // Unique ID for testing
//       title: "New Movie",
//       release_date: "2024-01-01",
//       poster_path: "/path_to_new_movie_poster.jpg",
//     };
//     dispatch(addMovie(newMovie));
//   };

//   const handleRemoveMovie = (movieId) => {
//     dispatch(removeMovie(movieId));
//   };

//   const handleUpdateMovie = (movieId) => {
//     const updatedMovie = {
//       id: movieId,
//       title: "Updated Movie Title",
//       release_date: "2025-01-01",
//       poster_path: "/path_to_updated_movie_poster.jpg",
//     };
//     dispatch(updateMovie(updatedMovie));
//   };

//   const handleClearMovies = () => {
//     dispatch(clearMovies());
//   };

//   return (
//     <div>
//       <button onClick={handleAddMovie}>Add Movie</button>
//       <button onClick={() => handleRemoveMovie(movies[0]?.id)}>
//         Remove First Movie
//       </button>
//       <button onClick={() => handleUpdateMovie(movies[0]?.id)}>
//         Update First Movie
//       </button>
//       <button onClick={handleClearMovies}>Clear Movies</button>

//       <div className="movie-grid">
//         {movies.map((movie) => (
//           <div key={movie.id} className="movie-card">
//             <img
//               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//               alt={movie.title}
//             />
//             <h3>{movie.title}</h3>
//             <p>{movie.release_date}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieGridRedux;
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/movieActions";
import StarRating from "./StarRating";
import "./MovieGrid.css";

const MovieGridRedux = ({ category }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies[category] || []); // Default to empty array
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    dispatch(fetchMovies(category)); // Ensure you pass the category
  }, [dispatch, category]);
  console.log("Movies in grid:", movies);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="movie-grid">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Movies</h2>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <StarRating rating={movie.vote_average} />
          </div>
        ))
      ) : (
        <div>No movies found</div>
      )}
    </div>
  );
};

export default MovieGridRedux;