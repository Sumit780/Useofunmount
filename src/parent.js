import React from "react";
import Child1 from "./child";
import Child2 from "./child1";
import Child3 from "./child3";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Parent extends React.Component {
  constructor() {
    super();
    this.setState = {};
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/child">Child1</Link>
              </li>
              <li>
                <Link to="/child1">Child2</Link>
              </li>
              <li>
                <Link to="/child2">Child3</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/child">
              <Child1 />
            </Route>
            <Route path="/child1">
              <Child2 />
            </Route>
            <Route path="/child2">
              <Child3 />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
