import React, { Component } from 'react'

class Greeting extends Component {
  render() {
    const name = this.props.name;

    if (name) {
      return (
        <div className="greet-user-box">
          <div>{name ? "Hello " + name + " !" : ""}</div>
        </div>   
      )
    }
    else {
      return <div></div>
    }
  }
}

export default Greeting;
