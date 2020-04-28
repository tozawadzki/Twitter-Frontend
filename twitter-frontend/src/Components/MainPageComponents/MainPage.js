import React, { Component } from "react";
import { Userbar } from "./UserBar";
import { CreateTweet } from "./Tweet";
import { Feed } from "./Feed";
import axios from "axios";
import { toast } from "react-toastify";
import { tweetsUrl } from "../../const";
export default class MainPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tweets: [{
        id: 0,
        userFirstName: '',
        userLastName: '',
        creationDate: '',
        lastEditDate: '',
        content: ''
      }]
    }

    this.newTweets = []
    this.newPost = []
  }

  componentDidMount() {
    this.getTweets();
  }

  getTweets() {
    axios.get(tweetsUrl)
      .then((response) => {
        this.setState({
          tweets: response.data
        })
      })
      .catch((error) => {
        toast.error("There is a problem with getting list of tweets:", error.response)
      })
  }

  render() {
    return (

      <div>
        <Userbar />
        <div className="container">
          <div className="row">
            <div className="col">
              <CreateTweet />
            </div>
          </div>
        </div>

        <div className="container">
          <Feed data={this.state.tweets} />
        </div>
      </div>
    )
  }
}
