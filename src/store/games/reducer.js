const initialState = {
  loading: false,
  games: [],
  sortedByReleaseDate: [],
};

export default function games(state = initialState, action) {
  switch (action.type) {
    case "games/set_games": {
      return {
        ...state,
        loading: false,
        games: action.payload,
      };
    }

    case "sortedByReleaseDate/setSortedByReleaseDate": {
      return {
        ...state,
        loading: false,
        sortedByReleaseDate: action.payload,
      };
    }

    case "games/start_loading": {
      return {
        ...state,
        loading: true,
      };
    }

    default:
      return state;
  }
}
