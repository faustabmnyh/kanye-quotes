import React from "react";

import KanyeQuoteView from "./KanyeQuoteView";
import PersonalQuoteView from "./PersonalQuoteView";

export default function HomeView() {
  return (
    <main style={{ marginLeft: "5%", marginRight: "5%" }}>
      <div style={{ marginBottom: "10vh" }}>
        <a href="https://kanye.rest" style={{ color: "#90e0ef" }}>
          API SITE
        </a>
      </div>
      <KanyeQuoteView />
      <PersonalQuoteView />
    </main>
  );
}
