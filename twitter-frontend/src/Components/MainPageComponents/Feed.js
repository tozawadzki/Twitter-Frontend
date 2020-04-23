import React, { Component } from "react";
import { Tweet } from "./Tweet";

export class Feed extends Component {
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
