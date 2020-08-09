import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  //ThemeHook is equals to const [color, setColor] now the array is called Themehook (a hook)
  const ThemeHook = useState("darkblue");

  return (
    <ThemeContext.Provider value={ThemeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>

        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
