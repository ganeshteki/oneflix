// const initialState = {
//   movies: [],
// };

// const movieReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_MOVIES":
//       return {
//         ...state,
//         movies: action.payload,
//       };

//     case "ADD_MOVIE":
//       return {
//         ...state,
//         movies: [...state.movies, action.payload],
//       };

//     case "REMOVE_MOVIE":
//       return {
//         ...state,
//         movies: state.movies.filter((movie) => movie.id !== action.payload),
//       };

//     case "UPDATE_MOVIE":
//       return {
//         ...state,
//         movies: state.movies.map((movie) =>
//           movie.id === action.payload.id
//             ? { ...movie, ...action.payload }
//             : movie
//         ),
//       };

//     case "CLEAR_MOVIES":
//       return {
//         ...state,
//         movies: [],
//       };

//     default:
//       return state;
//   }
// };

// export default movieReducer;
// const initialState = {
//   popular: [],
//   action: [],
//   adventure: [],
//   comedy: [],
//   searchResults: [],
//   loading: false,
//   error: null,
// };

// const movieReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'FETCH_MOVIES_REQUEST':
//     case 'SEARCH_MOVIES_REQUEST':
//       return { ...state, loading: true, error: null };
//     case 'FETCH_MOVIES_SUCCESS':
//       return {
//         ...state,
//         loading: false,
//         [action.payload.category]: action.payload.movies,
//       };
//     case 'FETCH_MOVIES_FAILURE':
//     case 'SEARCH_MOVIES_FAILURE':
//       return { ...state, loading: false, error: action.payload };
//     case 'SET_SEARCH_RESULTS':
//       return { ...state, searchResults: action.payload, loading: false };
//     default:
//       return state;
//   }
// };

// export default movieReducer;
const initialState = {
  popular: [],
  action: [],
  adventure: [],
  comedy: [],
  Thriller:[],
  searchResults: [],
};

const movieReducer = (state = initialState, action) => {
  console.log("Current state:", state);
  console.log("Action:", action);

  let newState;
  switch (action.type) {
    case "SET_MOVIES":
      // Ensure that the category exists in the initial state
      if (state[action.payload.category] !== undefined) {
        newState = {
          ...state,
          [action.payload.category]: action.payload.movies,
        };
      } else {
        console.error(`Unknown category: ${action.payload.category}`);
        newState = state;
      }
      break;

    case "SET_SEARCH_RESULTS":
      newState = {
        ...state,
        searchResults: action.payload,
      };
      break;

    default:
      newState = state;
  }

  console.log("New state:", newState);
  return newState;
};

export default movieReducer;