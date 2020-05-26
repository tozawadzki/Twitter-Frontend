import React, { Component } from "react";
import Tweet from "./TweetComponents/Tweet";

export default class Feed extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((data) =>
          <Tweet data={data} />
        )}
      </div>
    )
  }
}
