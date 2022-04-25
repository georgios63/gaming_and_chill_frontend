import axios from "axios";
import { apiUrl } from "../../config/constants";

export function loading() {
  return {
    type: "games/start_loading",
  };
}

export async function fetchGames(dispatch, getState) {
  try {
    const response = await axios.get(`${apiUrl}/games`);

    dispatch({ type: "games/set_games", payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchGamesSortedByReleaseDate(dispatch, getState) {
  try {
    const response = await axios.get(`${apiUrl}/games/sort-by/release-date`);

    dispatch({
      type: "sortedByReleaseDate/set_sortedByReleaseDate",
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchGamesByCategoryPc(dispatch, getState) {
  try {
    const response = await axios.get(`${apiUrl}/games/category/pc`);

    dispatch({
      type: "categoryByPc/set_categoryByPc",
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchGamesByCategoryBrowser(dispatch, getState) {
  try {
    const response = await axios.get(`${apiUrl}/games/category/browser`);

    dispatch({
      type: "categoryByBrowser/set_categoryByBrowser",
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
  }
}

export const fetchGameById = (id) =>
  async function (dispatch, getState) {
    try {
      const response = await axios.get(`${apiUrl}/games/${id}`);
      dispatch({
        type: "gameById/set_gameById",
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

export const fetchGamesBySearchBar = (action) =>
  function (dispatch, getState) {
    try {
      dispatch({
        type: "filteredBySearchBar/set_filteredBySearchBar",
        payload: action,
      });
      dispatch(fetchGames);
    } catch (error) {
      console.log(error.message);
    }
  };

export const fetchGamesByAdvancedFilterSearchBar = (action) =>
  function (dispatch, getState) {
    try {
      dispatch({
        type: "advancedFilteredSearchBar/set_advancedFilteredSearchBar",
        payload: action,
      });
      dispatch(fetchGames);
    } catch (error) {
      console.log(error.message);
    }
  };

export const addGamesToLibrary = (id) =>
  async function (dispatch, getState) {
    try {
      const state = getState();
      const token = state.user.token;

      if (token) {
        await axios.post(
          `${apiUrl}/library`,
          { id },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch({
          type: "putItemOnlibrary/set_putItemOnlibrary",
        });
        dispatch(fetchLibrary);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

export const fetchGameIdsFromLibrary = () =>
  async function (dispatch, getState) {
    try {
      const offset = getState().games.library.length;

      const response = await axios.get(
        `${apiUrl}/library?offset=${offset}&limit=4`
      );

      response.data.map(async (gameId) => {
        const response = await axios.get(`${apiUrl}/games/${gameId.gameId}`);
        dispatch({ type: "getGameIds/set_getGameIds", payload: response.data });
      });
    } catch (error) {
      console.log(error.message);
    }
  };

export const fetchLibrary = () =>
  async function (dispatch, getState) {
    try {
      const state = getState();
      const token = state.user.token;
      const response = await axios.get(`${apiUrl}/library`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: "getLibrary/set_getLibrary", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
