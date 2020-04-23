import React, { Component } from "react";
import { Link } from "react-router-dom"

export class Userbar extends Component {

  removeToken() {
    localStorage.removeItem("JWT")
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <ul className="navbar-nav ml-auto">
          <Link className="nav-link" to={"/sign-in"} onClick={this.removeToken()} >Logout</Link>
        </ul>
      </nav>
    )
  }
}