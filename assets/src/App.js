import React from 'react';
import ReactDOM from "react-dom";
import { UseSessionProvider } from "react-session-hook";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { About, Frontpage, Game, Games, NotFound } from "./pages";

const App = () => {
  return (
    <UseSessionProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Frontpage} />
          <Route path="/about" exact component={About} />
          <Route path="/games/:id" component={Game} />
          <Route path="/games" exact component={Games} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </UseSessionProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
