import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChessBoardPage from "./ChessBoardPage";
import OnboardingPage from "./OnboardingPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chess-board">
            <ChessBoardPage />
          </Route>
          <Route path="/">
            <OnboardingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
