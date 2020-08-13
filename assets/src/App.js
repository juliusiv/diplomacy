import React from 'react';
import ReactDOM from "react-dom";
import { UseSessionProvider } from "react-session-hook";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { About, Account, Frontpage, Game, Games, Login, NotFound, Signup } from "./pages";

const App = () => {
  return (
    <UseSessionProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Frontpage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/about" exact component={About} />
          <Route path="/account" exact component={Account} />
          <Route path="/games" exact component={Games} />
          <Route path="/games/join" component={Games} />
          <Route path="/games/create" component={Games} />
          <Route path="/games/:id" component={Game} />
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
