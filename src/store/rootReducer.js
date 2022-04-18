import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import games from "./games/reducer";

export default combineReducers({
  appState,
  user,
  games,
});
