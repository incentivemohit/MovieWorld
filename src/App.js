import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import MovieDetailsPage from "../../movie-world/src/components/MovieDetails/MovieDetailsPage";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/movieDetails/:id"
            component={MovieDetailsPage}
          ></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
