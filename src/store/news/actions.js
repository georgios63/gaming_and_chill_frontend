import axios from "axios";
import { apiUrl } from "../../config/constants";

export function loading() {
  return {
    type: "news/start_loading",
  };
}

export async function fetchNews(dispatch, getState) {
  try {
    const response = await axios.get(`${apiUrl}/news`);

    dispatch({ type: "news/set_news", payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
}
