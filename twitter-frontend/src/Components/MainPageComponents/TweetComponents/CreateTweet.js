import React, { Component } from "react";

export default class CreateTweet extends Component {

    handleChange = (event) => {
        this.props.handleChange(event)
    }

    render() {
        return (
            <div className="mb-2">
                <input value={this.props.newTweetContent} id="contentField" onChange={this.handleChange} type="text" className="form-control" placeholder="What's on your mind?" />
                <button onClick={this.props.handleSubmit} className="btn btn-large btn-primary btn-block"><span>Post</span></button>
            </div>
        )
    }
}