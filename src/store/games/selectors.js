export const gamesLoading = (reduxState) => reduxState.games.loading;
export const allGames = (reduxState) => reduxState.games.games;
export const allGamesSortedByReleaseDate = (reduxState) =>
  reduxState.games.sortedByReleaseDate;
export const allGamesByCategoryPc = (reduxState) =>
  reduxState.games.categoryByPc;
export const allGamesByCategoryBrowser = (reduxState) =>
  reduxState.games.categoryByBrowser;
export const allGamesBySearchBar = (reduxState) =>
  reduxState.games.filteredSearch;
export const allGamesByAdvancedSearchBar = (reduxState) =>
  reduxState.games.advancedFilterSearch;
export const aGameById = (reduxState) => reduxState.games.gameById;
