import React, { Component } from "react";
import { Link } from "react-router-dom"
import { removeToken } from "../../Helpers";

export default class Userbar extends Component {

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-sm bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-tem" style={{ padding: '5px' }}>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={() => { removeToken() }}>Logout</button>
            </li>
          </ul>
        </div>
      </nav >
    )
  }
}