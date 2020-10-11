import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import "./bookingForm.css"

class LoginPrompt extends Component {
  render() {
    return (
      <div className="prompt-wrapper">
        <div>To continue booking, please login or sign up.</div>
        <div className="login-prompt">
          <button onClick={() => this.props.history.push("/login")}>Log In</button>
        </div>
        <div className="signup-prompt">
          <button onClick={() => this.props.history.push("/signup")}>Sign Up</button>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginPrompt);
