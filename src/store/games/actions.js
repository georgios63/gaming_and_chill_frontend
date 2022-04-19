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
    const response = await axios.get(`${apiUrl}/games/release-date`);

    console.log(response.data);
    dispatch({
      type: "sortedByReleaseDate/setSortedByReleaseDate",
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
  }
}
