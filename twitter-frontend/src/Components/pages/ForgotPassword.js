import React, { Component } from "react";
import {Redirect, Link} from 'react-router-dom';

export default class ForgotPassword extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
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

    handleSubmit(){
        //send data to backend
        //backend sends new password
        this.setRedirect();
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/password-sent' />
        }
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
                     onChange={this.handleChange}  />
                    </div>
                    <div>
                        {this.renderRedirect()}
                        <button className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
                    </div>
                    <p className="forgot-password text-right">
                        <Link className="nav-link" to={"/sign-in"}>Back to login page</Link>
                    </p>
                </form>
            );
        }
}