import React, { Component } from 'react'
import axios from 'axios'
import Home from './Home';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      password: "",
      address: "",
      mobile: ""
    }

    this.valid = {
      name: false,
      username: false,
      password: false,
      address: false,
      mobile: false,
    }

    this.responseSuccess = "";
    this.responseError = "";
    this.submit = false;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.className]: event.target.value
    });
  }

  // set invalid if the input is empty
  setEmptyFieldInvalid() {
    Object.keys(this.state).forEach(key => {
      // remove space before & after the input string
      if (this.state[key].trim()) {
        this.valid[key] = true;
      }
      else {
        this.valid[key] = false;
      }
    });
  }

  // set valid true if person id is 4 or 5 characters
  setValidUsername() {
    this.valid.username = (this.state.username.length >= 4 && this.state.username.length <= 5);
  }

  // set valid true if mobile number is 10 characteres
  setValidMobile() {
    this.valid.mobile = (this.state.mobile.length === 10 && !isNaN(this.state.mobile))
  }

  // insert error message in form
  createErrorMsg(msg, id) {
    document.getElementById(id).innerHTML = msg;
  }

  // remove error message
  removeErrorMsg(id) {
    document.getElementById(id).innerHTML = "";
  }

  // validate all fields and set error messages if required
  validateForm() {
    this.setEmptyFieldInvalid();
    this.setValidUsername();
    this.setValidMobile();

    const errorMsg = {
      name: "Name is empty.",
      username: "Username is invalid.",
      password: "Password is invalid",
      address: "Address is invalid",
      mobile: "Mobile number is invalid."
    }

    // whether all inputs are valid
    var valid = true;
    Object.keys(this.valid).forEach(key => {
      var errorMsgId = key + "-error";

      if (!this.valid[key]) {
        valid = false;
        this.createErrorMsg(errorMsg[key], errorMsgId);
      }
      else {
        this.removeErrorMsg(errorMsgId);
      }
    });

    return valid;
  }

  /**
   * send input data to the backend API
   */
  sendData() {
    
    const data = {
      "name": "test",
      "personIdentifier": "h3rgc",
      "desc": "desc",
      "mobileNum": "0000000000",
      "start_date": "2020-09-08",
      "end_date": "2020-09-09",
      "role": "w"
    }

    // const data = {
    //   "name": this.state.name,
    //   "username": this.state.username,
    //   "password": this.state.password,
    //   "address": this.state.address,
    //   "mobileNum": this.state.mobile,
    //   "role": "c"
    // }

    return new Promise((resolve, reject) => {
      const url = 'http://localhost:8080/api/person';

      axios.post(url, data)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      })
    })
  }

  /**
   * called after submit button is clicked
   * @param {*} event 
   */
  handleSubmit(event) {
    event.preventDefault();
    this.submit = false;
    
    // break if any input is invalid
    if (!this.validateForm()) { return }

    // send state data to backend
    this.sendData()
      .then(result => {
        console.log(result);
        this.responseSuccess = result;

        // redirect to home
        this.props.history.push("/home");

      }).catch(error => {
        console.log(error);
        this.responseError = error;
      })

    this.submit = true;
    this.setState({
      name: "",
      username: "",
      password: "",
      address: "",
      mobile: ""
    });
  }

  render() {
    // const { params } = this.props.match;
    // const id = parseInt(params.id);

    

    const {name, username, password, address, mobile} = this.state;

    
    
    var errorBackend = "";
    // if (this.props.errorMsg) {
    //   if (this.props.errorMsg.personIdentifier) {
    //     errorBackend = this.props.errorMsg.personIdentifier;
    //   }
    // }

    // else {
    //   errorBackend = "Error occurred. Please try again."
    // }

    return (
      <div id="add-worker">
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit} id="add-worker-form">

          <div id="error-msg">
            <div>{(this.submit && !this.props.addWorkerSuccess) ? errorBackend : ""}</div>
            <div id="name-error"></div>
            <div id="username-error"></div>
            <div id="password-error"></div>
            <div id="address-error"></div>
            <div id="mobile-error"></div>
          </div>
          
          <div className="inputWrapper">
            <label htmlFor="name">Name: </label>
            <div className="input-msg">*Required</div>
            <input
              type="text"
              value={name}
              className="name"
              onChange={this.handleChange}
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="username">Username: </label>
            <div className="input-msg">*Required - Please enter 4 to 5 characters</div>
            <input
              type="text"
              value={username}
              className="username"
              onChange={this.handleChange}
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="password">Password: </label>
            <div className="input-msg">*Required</div>
            <input
              type="password"
              value={password}
              className="password"
              onChange={this.handleChange}
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="address">Address: </label>
            <div className="input-msg">*Required</div>
            <input
              type="text"
              value={address}
              className="address"
              onChange={this.handleChange}
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="mobile">Mobile Number: </label>
            <div className="input-msg">*Required - Please enter 10 characters</div>
            <input
              type="text"
              value={mobile}
              className="mobile"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" value="Save">Save</button>
        </form>
      </div>
    );
  }
};
export default SignUp;
