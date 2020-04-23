import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';
import { Router, Switch, Route, Link } from "react-router-dom";
import history from './history';
import Login from "./Components/SignInComponents/Login";
import SignUp from "./Components/SignInComponents/SignUp";
import ForgotPassword from "./Components/SignInComponents/ForgotPassword";
import PasswordSent from "./Components/SignInComponents/PasswordSent";
import Unauthorized from './Components/SignInComponents/Unauthorized';
import MainPage from "./Components/MainPageComponents/MainPage";
import axios from 'axios';

//na komponent
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      redirectToLogin: false,
      redirectTo500: false
    };
    axios.interceptors.response.use(response => {
      return response;
    }, error => {
      console.log(error);
      if (error.response && error.response.status === 401) {
        history.push("/unauthorized");
        return error;
      }
      console.log(error);
      if (error.response && error.response.status === 500) {
        this.setState({
          redirectTo500: true
        });
        return error;
      }
      return Promise.reject(error)
    })
  }

  render() {
    return (
      <Router history={history}>
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
                <Route path="/sign-up" component={SignUp} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/password-sent" component={PasswordSent} />
                <Route path="/unauthorized" component={Unauthorized} />
                <Route path="/main-page" component={MainPage} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}