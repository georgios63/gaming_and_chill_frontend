const initialState = {
  loading: false,
  alertMsg: false,
};

export default function alert(state = initialState, action) {
  switch (action.type) {
    case "alertSuccess/set_alertSuccess": {
      return {
        ...state,
        alertMsg: !state.alertMsg,
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
