const initialState = {
  loading: false,
  games: [],
  sortedByReleaseDate: [],
  categoryByPc: [],
  categoryByBrowser: [],
  filteredSearch: [],
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

    case "sortedByReleaseDate/set_sortedByReleaseDate": {
      return {
        ...state,
        loading: false,
        sortedByReleaseDate: action.payload,
      };
    }

    case "categoryByPc/set_categoryByPc": {
      return {
        ...state,
        loading: false,
        categoryByPc: action.payload,
      };
    }

    case "categoryByBrowser/set_categoryByBrowser": {
      return {
        ...state,
        loading: false,
        categoryByBrowser: action.payload,
      };
    }

    case "filteredBySearchBar/set_filteredBySearchBar": {
      return {
        ...state,
        loading: false,
        filteredSearch: action.payload,
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
