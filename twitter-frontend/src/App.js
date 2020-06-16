import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import Login from "./Components/SignInComponents/Login";
import SignUp from "./Components/SignInComponents/SignUp";
import ForgotPassword from "./Components/SignInComponents/ForgotPassword";
import PasswordSent from "./Components/SignInComponents/PasswordSent";
import Unauthorized from './Components/SignInComponents/Unauthorized';
import MainPage from "./Components/MainPageComponents/MainPage";
import NavBar from "./Components/SignInComponents/NavBar";
import LoadingSpinner from "./Components/SignInComponents/LoadingSpinner";
import axios from 'axios';
import { toast } from 'react-toastify';
import { setAuthorizationToken, getJwtTokenFromLocalStorage } from "./Helpers";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      redirectToLogin: false,
      redirectTo500: false,
      loading: false
    };

    axios.interceptors.request.use((config) => {
      this.setState({
        loading: true
      })
      return config;
    }, (error) => {

      console.log(error);
      return Promise.reject(error);
    });

    axios.interceptors.response.use(response => {
      this.setState({
        loading: false
      })
      return response;
    }, error => {
      console.log(error);
      this.setState({
        loading: false
      })

      if (error.response && error.response.status === 401) {
        history.push("/unauthorized");
        return error;
      }
      console.log(error);

      if (error.response && error.response.status === 500) {
        this.setState({
          redirectTo500: true,
        });
        return error;
      }

      if (this.state.redirectTo500 === true) {
        toast.error("Internal server error");
        history.push("/sign-in");
      }

      return Promise.reject(error)
    })

    let jwtToken = getJwtTokenFromLocalStorage();
    if (jwtToken !== undefined && jwtToken !== null) {
      setAuthorizationToken(jwtToken);
    }

  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <NavBar />
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
              <LoadingSpinner loading={this.state.loading} />
            </div>
          </div>
        </div>
      </Router >
    );
  }
}