import React, { Component } from "react";
import Userbar from "./UserBar";
import CreateTweet from "./TweetComponents/CreateTweet";
import Feed from "./Feed";
import axios from "axios";
import { toast } from "react-toastify";
import { tweetsUrl, newTweetUrl } from "../../const";
import Logo from "./Logo";

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
      }],
      newTweetContent: ''

    }
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

  handleChange = (e) => {
    this.setState({
      newTweetContent: e.target.value
    })
  }

  handleSubmit = () => {
    if (this.state.newTweetContent.length > 0) {

      let postData = {
        content: this.state.newTweetContent
      }

      axios.post(newTweetUrl, postData)
        .then(({ data }) => {
          const { tweets } = this.state;
          const newTweetsList = [...tweets, data]
          this.setState({
            tweets: newTweetsList,
            content: ''
          })
        })
        .catch((error) => {
          toast.error("There is a problem with creating new tweet: ", error.response)
        })

      this.setState({
        newTweetContent: ''
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="container">
        <Logo />
        <Userbar />
        <CreateTweet handleSubmit={this.handleSubmit} handleChange={this.handleChange} newTweetContent={this.state.newTweetContent} />
        <Feed data={this.state.tweets} />
      </div>
    )
  }
}
