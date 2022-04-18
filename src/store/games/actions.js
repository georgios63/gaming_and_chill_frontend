import axios from "axios";
import { apiUrl } from "../../config/constants";

export function loading() {
  return {
    type: "games/start_loading",
  };
}

export async function fetchGames(dispatch, getState) {
  try {
    const response = await axios.get(`${apiUrl}/artworks`);

    dispatch({
      type: "artworks/set_artworks",
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
  }
}
