import Moment from "react-moment"
import React, { Component } from "react";
import '../../../Styles/MainPage.css';

export default class TweetContent extends Component {
    render() {
        return (
            <div>
                <div className="col-12 d-flex align-items-center">
                    <h4 className="font-weight-bold mb-1 d-inline-block" >
                        {this.props.data.userFirstName} {this.props.data.userLastName}

                    </h4>
                </div>
                <div className="col-12">
                    <p className="font-italic mb-0">
                        <Moment local fromNow>{this.props.data.lastEditDate}</Moment>
                    </p>
                    <div>
                        <p className="tweet">{this.props.data.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}
