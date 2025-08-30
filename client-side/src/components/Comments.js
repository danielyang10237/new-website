import React, { Component } from "react";
import axios from "axios";

const API_BASE_URL = "https://portfolio-server-6xnq.onrender.com";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      name: "",
      comment: "",
    };
  }

  componentDidMount() {
    this.updateComments();
  }

  updateComments = () => {
    axios
      .get(`${API_BASE_URL}/api/comments`)
      .then((response) => {
        let comments = response.data;
        comments.reverse();
        this.setState({ comments: comments });
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  };

  handleChangeComment = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    const timePosted = new Date().toLocaleString();
    event.preventDefault();

    // Check if either name or comment is empty
    if (!this.state.name || !this.state.comment) {
      alert("Please fill in both name and comment fields.");
      return; // Stop the submission
    }

    axios
      .post(`${API_BASE_URL}/api/comments`, {
        name: this.state.name,
        text: this.state.comment,
        time: timePosted,
      })
      .then((response) => {
        this.updateComments();
        this.setState({ name: "", comment: "" });
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  formatTime = (timeString) => {
    const date = new Date(timeString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding leading zero if necessary
    return `${year}-${month}`;
  };

  render() {
    return (
      <div id="comments">
        <div className="col-md-12">
          <h1 className="section-title2">
            <span className="text-white section-header-title">
              Leave a Comment!
            </span>
          </h1>
        </div>
        <div className="container col-sm-12 col-md-12 col-lg-12 center">
          <form
            className="comment-form col-sm-12 col-md-12 col-lg-12 comment-header-container"
            onSubmit={this.handleSubmit}
          >
            <div className="comment-form-text">
              <p className="">Display Name</p>
              <input
                className="comment-form-field-name"
                type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChangeName}
              />
            </div>
            <div className="comment-form-text">
              <p className="">Message</p>
              <input
                className="comment-form-field-message"
                type="text"
                placeholder="Comment"
                value={this.state.comment}
                onChange={this.handleChangeComment}
              />
            </div>
            <input
              className=" comment-form-submit"
              type="submit"
              value="Post"
            />
          </form>
        </div> 
        <div className="comment-list col-sm-12 col-md-10 col-lg-8">
          {this.state.comments.map((comment, index) => (
            <div className="comment" key={index}>
              <div className="comment-top">
                <div className="comment-user">{comment.username}</div>
                <div className="comment-time">
                  {this.formatTime(comment.time)}
                </div>
              </div>
              <div className="comment-text">{comment.text}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Comments;
