
import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "../../Styles/Spinner.css";

export default class LoadingSpinner extends Component {

    render() {
        if (this.props.loading)
            return (
                <div className="spinner">
                    <Loader type="Grid" color="#FF8C00" height="100" width="100" />
                </div>
            )
        else
            return null
    }
}

