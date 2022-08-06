import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { HomePage, CoinPage, Portfolio } from 'pages'

export default function App() {
  this.state = {
    on: true
  }
  return (
    <Router>
      <div>
        <nav>
        </nav>

        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path='/coinpage/:coinId' component={CoinPage}/>
git
        </Switch>
      </div>
    </Router>
  );
}

