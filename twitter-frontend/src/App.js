import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";
import ForgotPassword from "./Components/pages/ForgotPassword";
import PasswordSent from "./Components/pages/PasswordSent";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Register} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/password-sent" component={PasswordSent} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;