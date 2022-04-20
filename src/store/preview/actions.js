export function loading() {
  return {
    type: "preview/start_loading",
  };
}

export function previewd(action) {
  return {
    type: "preview/set_preview",
    payload: action,
  };
}
