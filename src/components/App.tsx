import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChessBoardPage from "./ChessBoardPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chess-board">
            <ChessBoardPage />
          </Route>
          <Route path="/">
            <div>App</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
