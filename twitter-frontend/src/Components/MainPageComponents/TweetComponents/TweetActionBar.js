import React, { Component } from "react";
import { tweetsUrl } from "../../../const";
import { toast } from "react-toastify";
import axios from "axios";

export default class TweetActionBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: false,
            deleted: false,
            editing: true
        }
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
        const deleteRequest = `${tweetsUrl}/${this.props.tweetId}`
        axios.delete(deleteRequest)
            .then(
                window.location.reload()
            )
            .catch((error) => {
                toast.error("There is a problem with deleting this tweet:", error.response)
            })
    }

    editTweet = () => {
        const editRequest = `${tweetsUrl}/${this.props.tweetId}`

        axios.put(editRequest)
            .catch((error) => {
                toast.error("There is a problem with editing this tweet:", error.response)
            })
    }

    render() {
        ;
        this.likeClass = 'fa fa-heart mr-4 iconStyling';
        this.deleteClass = 'fa fa-trash mr-4 iconStyling';
        this.editClass = 'fa fa-pencil-square-o mr-4 iconStyling';
        return (
            <div className="col-sm-12 mt-1">
                <i style={this.likeStyle} onClick={this.toggleLike} className={this.likeClass}></i>
                <i onClick={this.deleteTweet} className={this.deleteClass}></i>
                <i onClick={this.editTweet} className={this.editClass}></i>
            </div>
        )
    }
}


