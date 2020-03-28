import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            email: "",
            password: "",
            redirect: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = () => {
        //send data to backend (add new user)
        this.setRedirect();
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    toLoginPage = () => {
        if (this.state.redirect){
            return <Redirect to='/sign-in' />
        }
    }

    render() {
        return (
            <form>
                <h3>Sign up</h3>
                
                <div className="form-group">
                    <label>Name</label>
                    <input name="name"
                     type="text"
                     className="form-control"
                     placeholder="Enter your nickname"
                     value={this.props.name}
                     onChange={this.handleChange}  />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input name="email"
                     type="email"
                     className="form-control"
                     placeholder="you@example.com"
                     value={this.props.email}
                     onChange={this.handleChange}  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password"
                     type="text"
                     className="form-control"
                     placeholder="Enter your password"
                     value={this.props.password}
                     onChange={this.handleChange}  />
                </div>
                <div>
                    {this.toLoginPage()}
                    <button type="submit" 
                    className="btn btn-primary btn-block"
                    onClick={this.handleSubmit}>
                    Sign up
                    </button>
                </div>
                
                <p className="forgot-password text-right">
                    Already registered? 
                    <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                </p>
            </form>
        );
    }
}