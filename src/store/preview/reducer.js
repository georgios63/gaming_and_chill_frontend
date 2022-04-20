const initialState = {
  loading: false,
  preview: ``,
};

export default function preview(state = initialState, action) {
  switch (action.type) {
    case "preview/set_preview": {
      return {
        ...state,
        loading: false,
        preview: action.payload,
      };
    }

    case "preview/start_loading": {
      return {
        ...state,
        loading: true,
      };
    }

    default:
      return state;
  }
}
