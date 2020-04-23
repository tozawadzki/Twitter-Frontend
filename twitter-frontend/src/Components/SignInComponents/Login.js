import axios from 'axios';
import history from '../../history.js';
import React, { Component } from "react";
import { Link } from "react-router-dom"
import { loginUrl } from "../../const.js"
import { IsUserSignedIn, setAuthorizationToken } from "../../Helpers";
import { toast } from "react-toastify";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            success: false,
            token: ""
        };
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleSigningIn();
    }

    handleSigningIn = () => {
        this.loginUser()
            .then((response) => {
                setAuthorizationToken(response)
            })
            .then(() => {
                if (IsUserSignedIn()) {
                    history.push("/main-page")
                }
            });

        //HOC -> funkcja, która zwróci komponent docelowy (parametr, zwrot: komponent)
        //Sprawdzenie, czy userSignedIn
        //tak -> przekieruj
        //nie -> unauthorized/signin
        //Użytkownik zalogowany
        //intereceptors : axios docs
        //każdy request -> wysłanie tokena do bakcendu i backend sprawdza czy token jest ważny (np. 15min)
        //jeśli użytkownik jest zalogowany ale token wygaśnie - 401
        //i wtedy np. list of tweets z tokenem do requesta. backend odbiera token - jeśli jest ważny to zwraca liste, a jeśli nie to 401 i jest strona 401
        //Wylogowanie - usuwamy token z local storage i uderzamy do backendu - wyloguj
        //localStorage.setItem('myValueInLocalStorage', event.target.value);
        //za każdym razem trzeba sprawdzać czy response nie jest 401 
        //React Hoooks -> zastępstwo HOC -> 401 + dodawanie tokena do każdego requesta
    }

    loginUser = () => {
        let loginData = {
            email: this.state.email,
            password: this.state.password
        }

        return axios.post(loginUrl, loginData)
            .then((response) => {
                let receivedToken = response.data;
                localStorage.setItem("JWT", receivedToken);
                return response.data;
            })
            .catch(error => {
                toast.error("There is an error with signing in: ", error.response)
            });
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input name="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={this.state.email}
                        onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                </div>
                <div>
                    <button type="submit"
                        className="btn btn-primary btn-block"
                        onClick={this.handleSubmit}>Sign in</button>
                    <p className="forgot-password text-right">
                        <Link className="nav-link" to={"/forgot-password"}>Forgot your password?</Link>
                    </p>
                </div>
            </form>
        );
    }
}