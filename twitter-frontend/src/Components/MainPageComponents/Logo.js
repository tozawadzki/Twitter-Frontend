import React, { Component } from "react";
import "../../Styles/Logo.css";

export default class Logo extends Component{
    render() {
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <label className="logoPGS">PGS</label>
                    </div>
                    <div clasname="col-auto">
                        <label className="logoTwitter">twitter</label>
                    </div>
                </div>
            </div>
        )
    }
}