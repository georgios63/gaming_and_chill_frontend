export function loading() {
  return {
    type: "alerts/start_loading",
  };
}

export function successAlert(dispatch, getState) {
  const state = getState();
  const success = state.alert.success;
  dispatch({ type: "alertSuccess/set_alertSuccess", payload: !success });
}

export function warningAlert(dispatch, getState) {
  const state = getState();
  const warning = state.alert.warning;
  dispatch({ type: "alertWarning/set_alertWarning", payload: !warning });
}
