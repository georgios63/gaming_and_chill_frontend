import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import games from "./games/reducer";
import preview from "./preview/reducer";
import alert from "./alert/reducer";
import news from "./news/reducer";

export default combineReducers({
  appState,
  user,
  games,
  preview,
  alert,
  news,
});
