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
