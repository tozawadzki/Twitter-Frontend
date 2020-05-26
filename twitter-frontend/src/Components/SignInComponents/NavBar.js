import React, { Component } from "react";
import history from '../../history.js';

export default class NavBar extends Component {
    handleSubmit = (element) => {
        history.push("/sign-up")
    }

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-sm bg-light">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-tem" style={{ padding: '5px' }}>
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                onClick={() => { history.push("/sign-in") }}>Sign in</button>
                        </li>
                        <li className="nav-tem" style={{ padding: '5px' }}>
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                onClick={() => { history.push("/sign-up") }}>Sign up</button>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
