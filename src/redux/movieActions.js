// import axios from "axios";

// const API_KEY = "2322c5053c8f34baff2a2d2aa512f228"; // Replace with your actual TMDB API key
// const API_BASE_URL = "https://api.themoviedb.org/3";

// export const fetchMovies = () => async (dispatch) => {
//   try {
//     const response = await axios.get(
//       `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
//     );
//     dispatch({ type: "SET_MOVIES", payload: response.data.results });
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//   }
// };
// // Existing fetchMovies action remains unchanged

// export const addMovie = (movie) => {
//   return {
//     type: "ADD_MOVIE",
//     payload: movie,
//   };
// };

// export const removeMovie = (movieId) => {
//   return {
//     type: "REMOVE_MOVIE",
//     payload: movieId,
//   };
// };

// export const updateMovie = (movie) => {
//   return {
//     type: "UPDATE_MOVIE",
//     payload: movie,
//   };
// };

// export const clearMovies = () => {
//   return {
//     type: "CLEAR_MOVIES",
//   };
// };
import axios from "axios";

const API_KEY = "2322c5053c8f34baff2a2d2aa512f228";// Replace with your actual TMDB API key
const API_BASE_URL = "https://api.themoviedb.org/3";

// redux/movieActions.js

export const fetchMovies = (category) => async (dispatch) => {
  try {
    let endpoint;
    switch (category) {
      case "action":
        endpoint = "/discover/movie?with_genres=28";
        break;
      case "adventure":
        endpoint = "/discover/movie?with_genres=12";
        break;
      case "comedy":
        endpoint = "/discover/movie?with_genres=35";
        break;
      case "Thriller":
        endpoint = "/discover/movie?with_genres=53";
        break;
      case "popular":
      default:
        endpoint = "/movie/popular";
    }

    const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: 1,
      },
    });
    console.log("API response:", response.data.results);
    dispatch({
      type: "SET_MOVIES",
      payload: { category, movies: response.data.results },
    });
  } catch (error) {
    console.error(`Error fetching ${category} movies:`,error);
  }
};

export const searchMovies = (query) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        query: query,
        page: 1,
      },
    });
    dispatch({ type: "SET_SEARCH_RESULTS", payload: response.data.results });
  } catch (error) {
    console.error(`Error searching movies:`, error);
  }
};