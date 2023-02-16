import { quoteAPI } from "../../provider/api";
import {
  ADD_KANYE_FAVORITES_QUOTES,
  ADD_PERSONAL_QUOTE,
  GET_KANYE_QUOTE,
} from "../constants/quoteConstants";

export const addPersonalQuote = (quote) => (dispatch) => {
  dispatch({ type: ADD_PERSONAL_QUOTE, payload: quote });
};

export const getKanyeQuote = () => async (dispatch) => {
  try {
    const {
      data: { quote },
    } = await quoteAPI.get();
    dispatch({ type: GET_KANYE_QUOTE, payload: quote });
  } catch (err) {
    return err;
  }
};

export const addKanyeFavoriteQuotes = (quote) => (dispatch) => {
  dispatch({ type: ADD_KANYE_FAVORITES_QUOTES, payload: quote });
};
