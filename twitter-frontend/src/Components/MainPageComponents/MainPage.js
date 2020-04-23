import React, { Component } from "react";
import { Userbar } from "./UserBar";
import { CreateTweet } from "./Tweet";
import { Feed } from "./Feed";
import axios from "axios";
import { toast } from "react-toastify";

export default class MainPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tweets: [{
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
    //Wywołanie metody GetTweets
    /*
    let postData = {

    }

    axios.post(tweetsListUrl, postData)
      .then((response) => {
        this.setState({
            tweets: response.data -> Czy to automatycznie się zmapuje?
        })
      })
      .catch((error) => {
        toast.error("There is a problem with getting list of tweets:", error.response)
      })
      */

    //Hardcode do testów
    this.setState({
      tweets: [{
        userFirstName: 'Jan',
        userLastName: 'Niezbędny',
        creationDate: '22-04-2020',
        lastEditDate: '22-04-2020',
        content: 'Produkuję gąbki'
      }, {
        userFirstName: 'Dr',
        userLastName: 'Oetker',
        creationDate: '22-04-2020',
        lastEditDate: '22-04-2020',
        content: 'Guseppe'
      }]
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
