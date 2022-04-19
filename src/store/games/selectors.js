export const gamesLoading = (reduxState) => reduxState.games.loading;
export const allGames = (reduxState) => reduxState.games.games;
export const allGamesSortedByReleaseDate = (reduxState) =>
  reduxState.games.sortedByReleaseDate;
export const allGamesByCategoryPc = (reduxState) =>
  reduxState.games.categoryByPc;
