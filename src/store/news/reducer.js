const initialState = {
  loading: false,
  news: [],
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case "news/set_news": {
      return {
        ...state,
        loading: false,
        news: action.payload,
      };
    }

    case "news/start_loading": {
      return {
        ...state,
        loading: true,
      };
    }

    default:
      return state;
  }
}
