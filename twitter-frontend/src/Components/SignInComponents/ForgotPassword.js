import React, { Component } from "react";
import { Link } from 'react-router-dom';
import history from '../../history.js';

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ""
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = () => {
        history.push('/password-sent')
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <input name="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={this.props.name}
                        onChange={this.handleChange} />
                </div>

                <div>
                    <button className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
                </div>

                <p className="forgot-password text-right">
                    <Link className="nav-link" to={"/sign-in"}>Back to login page</Link>
                </p>
            </form>
        );
    }
}