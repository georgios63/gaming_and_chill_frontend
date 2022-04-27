const initialState = {
  loading: false,
  success: false,
  warning: false,
};

export default function alert(state = initialState, action) {
  switch (action.type) {
    case "alertSuccess/set_alertSuccess": {
      return {
        ...state,
        loading: false,
        success: action.payload,
      };
    }

    case "alertWarning/set_alertWarning": {
      return {
        ...state,
        loading: false,
        warning: action.payload,
      };
    }

    case "alerts/start_loading": {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
}
