import React, { Component } from 'react'
import Layout from './Layout';
import { connect } from "react-redux";
import './LoginForm.css';
import { loginUser } from '../../actions/loginActions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        username: "",
        password: "",
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var newState = this.state;
    newState.formData[event.target.className] = event.target.value;
    this.setState(newState);
  }

  /**
   * called after submit button is clicked
   * @param {*} event 
   */
  handleSubmit(event) {
    event.preventDefault();
    
    // prevent sending empty value 
    if (!this.state.formData.username || !this.state.formData.password) { 
      return 
    }

    // send state data to backend
    this.props.dispatch(loginUser(this.state.formData));

    var newState = this.state;
    newState.formData = {
      username: "",
      password: ""
    };
    this.setState(newState);
  }

  render() {
    const {username, password} = this.state.formData;

    var errorBackend = "";
    if (this.props.errorMsg) {
      // if (this.props.errorMsg.personIdentifier) {
      //   errorBackend = this.props.errorMsg.username;
      // }
    }
    else {
      errorBackend = "Error occurred. Please try again."
    }

    return (
      <Layout>
        <div id="login-container">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit} id="login-form">

            <div id="error-msg">
              <div>{(this.submit && this.state.responseError) ? errorBackend : ""}</div>
            </div>

            <div className="inputWrapper">
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                value={username}
                className="username"
                onChange={this.handleChange}
              />
            </div>

            <div className="inputWrapper">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                value={password}
                className="password"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" value="Sign Up">Sign Up</button>
          </form>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  // const currentState = state.loginReducer[state.loginReducer.length - 1];

  // return {
  //   login: currentState.login,
  //   errorMsg: ""
  // }

  return {
    login: false,
    errorMsg: ""
  }
}

export default connect(mapStateToProps, null)(Login)

