import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPersonalQuote } from "../redux/actions/quoteActions";

export default function PersonalQuoteView() {
  const dispatch = useDispatch();
  const { personalQuotes } = useSelector((state) => state.quotes);
  const [quote, setQuote] = useState("");

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    if (!quote.trim()) return;
    dispatch(addPersonalQuote(quote));
    setQuote("");
  };

  return (
    <section className="personalQuote">
      <hr />
      <br />
      <h2>My Quotes</h2>
      <br />
      <form onSubmit={handleSubmitQuote}>
        <input
          placeholder="Enter your quote here..."
          onChange={(e) => setQuote(e.target.value)}
          value={quote}
        />
        <button type="submit">Submit</button>
      </form>
      {personalQuotes.length ? (
        <ul>
          {personalQuotes.map((quote) => (
            <li>{quote}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
