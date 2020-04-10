import React from 'react';
import ReactDOM from "react-dom";
import { UseSessionProvider } from "react-session-hook";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import css from "<style>";
import { About, Frontpage, Game, Games, NotFound } from "./pages";

const App = () => {
  return (
    <UseSessionProvider>
      <Router>
        <div className={css`bgOffwhite heightAll overflowAuto pl4 pr4`}>
          <Switch>
            <Route path="/" exact component={Frontpage} />
            <Route path="/about" exact component={About} />
            <Route path="/games" exact component={Games} />
            <Route path="/games/:id" exact component={Game} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </UseSessionProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
