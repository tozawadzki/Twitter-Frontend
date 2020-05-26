import React, { Component } from "react";
import TweetContent from "./TweetContent";
import TweetActionBar from "./TweetActionBar";

export default class Tweet extends Component {

  render() {
    return (
      <div className="row mx-auto justify-content-start border mt-1 p-2 w-100 align-items-center">
        <TweetContent data={this.props.data} />
        <TweetActionBar tweetId={this.props.data.id} />
      </div>
    )
  }
}

