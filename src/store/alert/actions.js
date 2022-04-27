export function loading() {
  return {
    type: "alerts/start_loading",
  };
}

export function successAlert() {
  return {
    type: "alertSuccess/set_alertSuccess",
  };
}
