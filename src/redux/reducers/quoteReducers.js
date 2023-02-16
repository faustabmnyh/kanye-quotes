import {
  ADD_KANYE_FAVORITES_QUOTES,
  ADD_PERSONAL_QUOTE,
  GET_KANYE_QUOTE,
} from "../constants/quoteConstants";

const initalState = {
  personalQuotes: [],
  kanyeFavoriteQuotes: [],
  kanyeQuote: "",
};

export const quotesReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_PERSONAL_QUOTE:
      const isExist = state.personalQuotes.find(
        (quote) => quote === action.payload
      );
      if (isExist) return state;
      return {
        ...state,
        personalQuotes: [...state.personalQuotes, action.payload],
      };
    case GET_KANYE_QUOTE:
      return {
        ...state,
        kanyeQuote: action.payload,
      };
    case ADD_KANYE_FAVORITES_QUOTES:
      const isFavoriteExist = state.kanyeFavoriteQuotes.find(
        (quote) => quote === action.payload
      );
      if (isFavoriteExist) return state;
      return {
        ...state,
        kanyeFavoriteQuotes: [...state.kanyeFavoriteQuotes, action.payload],
      };
    default:
      return state;
  }
};
