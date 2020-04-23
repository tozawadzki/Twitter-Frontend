import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Unauthorized extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label type="text" className="">401</label>
                    <br></br>
                    <label type="text" className="">Unauthorized</label>
                </div>

                <p className="sign-in text-right">
                    <Link className="nav-link" to="/sign-in">Back to home page</Link>
                </p>
            </form>
        );
    }
}
