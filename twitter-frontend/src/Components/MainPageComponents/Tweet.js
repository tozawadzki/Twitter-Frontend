import React, { Component } from "react";
import axios from "axios";
import { newTweetUrl, tweetsUrl } from "../../const";
import { toast } from "react-toastify";
import Moment from "react-moment"

export class Tweet extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row mx-auto justify-content-start border mt-1 p-2 w-100 align-items-center">
        <TweetContent data={this.props.data} />
        <TweetActionBar tweetId={this.props.data.id} />
      </div>
    )
  }
}

export class TweetActionBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
      deleted: false,
      editing: true
    }
    let likeStyle = {}
    this.likeClass = 'fa fa-heart mr-4 iconStyling'
    this.deleteClass = 'fa fa-trash mr-4 iconStyling'
    this.editClass = 'fa fa-pencil-square-o mr-4 iconStyling'
  }

  toggleLike = () => {
    if (this.state.liked) {
      this.likeClass = this.likeClass.replace('fas', 'far')
      this.likeStyle = {}
      this.setState({
        liked: false
      })
    } else {
      this.likeClass = this.likeClass.replace('far', 'fas')
      this.likeStyle = { color: 'red' }
      this.setState({
        liked: true
      })
    }
  }

  deleteTweet = () => {
    let deleteRequest = `${tweetsUrl}/${this.props.tweetId}`
    axios.delete(deleteRequest)
      .then(
        window.location.reload()
      )
      .catch((error) => {
        toast.error("There is a problem with deleting this tweet:", error.response)
      })
  }

  editTweet = () => {
    let editRequest = `${tweetsUrl}/${this.props.tweetId}`

    axios.put(editRequest)
      .catch((error) => {
        toast.error("There is a problem with editing this tweet:", error.response)
      })
  }

  render() {
    return (
      <div className="col-sm-12 mt-1">
        <i style={this.likeStyle} onClick={this.toggleLike} className={this.likeClass}></i>
        <i onClick={this.deleteTweet} className={this.deleteClass}></i>
        <i onClick={this.editTweet} className={this.editClass}></i>
      </div>
    )
  }
}

export class TweetContent extends Component {
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
            <Moment add={{ hours: 2 }} fromNow>{this.props.data.lastEditDate}</Moment>
          </p>
          <p className="mb-0">{this.props.data.content}</p>
        </div>
      </div>
    )
  }
}

export class CreateTweet extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: ''
    }

  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = () => {
    if (this.state.content.length > 0) {

      let postData = {
        content: this.state.content
      }

      axios.post(newTweetUrl, postData)
        .then(
          window.location.reload()
        )
        .catch((error) => {
          toast.error("There is a problem with creating new tweet: ", error.response)
        })

      document.getElementById('contentField').value = ''
      this.setState({
        content: ''
      })
    }
  }

  render() {
    return (
      <div className="mb-2 fixedMenuFix">
        <input id="contentField" onChange={this.handleChange} type="text" className="form-control" placeholder="What's on your mind?" />
        <button onClick={this.handleSubmit} className="btn btn-large btn-warning btn-block"><span>Post</span></button>
      </div>
    )
  }
}