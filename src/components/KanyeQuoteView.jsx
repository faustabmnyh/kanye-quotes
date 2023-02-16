import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addKanyeFavoriteQuotes,
  getKanyeQuote,
} from "../redux/actions/quoteActions";

export default function KanyeQuoteView() {
  const dispatch = useDispatch();
  const { kanyeFavoriteQuotes, kanyeQuote } = useSelector(
    (state) => state.quotes
  );

  const handleAddFavorite = () => {
    dispatch(addKanyeFavoriteQuotes(kanyeQuote));
  };

  useEffect(() => {
    dispatch(getKanyeQuote());
  }, [dispatch]);

  return (
    <section className="kanyeQuote">
      <div className="kanyeQuote__head">
        <img
          src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
          alt="W3Schools.com"
        />
        <div>
          <h1>Kanye West Quote</h1>
          <h3>{kanyeQuote}</h3>

          <div className="kanyeQuote__btnContainer">
            <button onClick={() => dispatch(getKanyeQuote())}>Get Quote</button>
            <button onClick={handleAddFavorite}>Add Favorite</button>
          </div>
        </div>
      </div>

      <div className="kanyeQuote__favorite">
        <h2>Your Favorite Kanye's Quotes: </h2>
        {kanyeFavoriteQuotes.length ? (
          <ul>
            {kanyeFavoriteQuotes.map((quote) => (
              <li>{quote}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
