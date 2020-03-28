import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Login extends Component { 
    constructor(props) {
        super(props);
        this.state={
            email: "", 
            password: "",
            success: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit() {
        this.isValid();
        this.handleSigningIn();
    }

    isValid(){
        //calls backend with login data
        //backend checks whether user with such email and password exists in the database
        //sets success = true/false
    }

    handleSigningIn() {
        //success === true -> redirect to home page of an app
        //success === false -> invalid username/password
        //Odpowiedź - użytkownik nie istanieje
        //istnieje ale złe hasło -> zła praktyka
        //istnieje i hasło spoko - token z backendu
        //odpowiedź z backendu to JSON -> w środku token z wartością (header)
        //napisać endpoint w kontrolerze który zwróci JWT Token - encoded z jwt.io
        //wtedy wrzucić to do local storage
        //sprawdzamy czy w local storage jest jakiś token
        //401 Unauthorized -> kiedy się zalogował
        //każdy request -> wysłanie tokena do bakcendu i backend sprawdza czy token jest ważny (np. 15min)
        //jeśli użytkownik jest zalogowany ale token wygaśnie - 401
        //dobre hasło -> przekierowanie na stronę głównej
        //i wtedy np. list of tweets z tokenem do requesta. backend odbiera token - jeśli jest ważny to zwraca liste, a jeśli nie to 401 i jest strona 401
        //Wylogowanie - usuwamy token z local storage i uderzamy do backendu - wyloguj
        //localStorage.setItem('myValueInLocalStorage', event.target.value);
        //za każdym razem trzeba sprawdzać czy response nie jest 401 
        //React Hoooks -> zastępstwo HOC 401 + dodawanie tokena do każdego requesta
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

                <button type="submit" 
                className="btn btn-primary btn-block" 
                onClick={this.handleSubmit}>
                    Sign in
                    </button>
                <p className="forgot-password text-right">
                   <Link className="nav-link" to={"/forgot-password"}>Forgot your password?</Link>
                </p>
            </form>
        );
    }
}