import React, { Component } from 'react'

class Greeting extends Component {
  render() {
    const username = this.props.username;

    if (username) {
      return (
        <div className="greet-user-box">
          <div>{username ? "Hello " + username + " !" : ""}</div>
        </div>   
      )
    }
    else {
      return <div></div>
    }
  }
}

export default Greeting;
