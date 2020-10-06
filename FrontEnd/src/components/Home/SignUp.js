import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import Layout from './Layout';
import { addCustomer } from '../../actions/customerActions';
import '../Persons/AddPersonForm.css';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        name: "",
        username: "",
        password: "",
        address: "",
        mobile: "",
      },
     
      responseSuccess: "",
      responseError: ""
    }

    this.valid = {
      name: false,
      username: false,
      password: false,
      address: false,
      mobile: false,
    }

    this.submit = false;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var newState = this.state;
    newState.formData[event.target.className] = event.target.value;
    this.setState(newState);
  }

  // set invalid if the input is empty
  setEmptyFieldInvalid() {
    Object.keys(this.state.formData).forEach(key => {
      // remove space before & after the input string
      if (this.state.formData[key].trim()) {
        this.valid[key] = true;
      }
      else {
        this.valid[key] = false;
      }
    });
  }

  // set valid true if person id is 4 or 5 characters
  setValidUsername() {
    this.valid.username = (this.state.formData["username"].length >= 4 && this.state.formData["username"].length <= 5);
  }

  // set valid true if mobile number is 10 characteres
  setValidMobile() {
    this.valid.mobile = (this.state.formData["mobile"].length === 10 && !isNaN(this.state.formData["mobile"]))
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
   * called after submit button is clicked
   * @param {*} event 
   */
  handleSubmit(event) {
    event.preventDefault();
    this.submit = false;
    
    // break if any input is invalid
    if (!this.validateForm()) { return }

    // send state data to backend
    this.props.dispatch(addCustomer(this.state.formData));

    this.submit = true;

    var newState = this.state;
    newState.formData = {
      name: "",
      username: "",
      password: "",
      address: "",
      mobile: ""
    };
    this.setState(newState);
  }

  render() {

    // redirect to home if successfully submitted
    if (this.submit && this.props.login) {
      // const username = this.state.responseSuccess.username;
      // const userId = this.state.responseSuccess.userId;

      // update user login info
      // this.props.dispatch(logIn(username, userId));

      return <Redirect to="/home" />;
    }
    
    const {name, username, password, address, mobile} = this.state.formData;

    var errorBackend = "";
    if (this.props.errorMsg) {
      if (this.props.errorMsg.personIdentifier) {
        errorBackend = this.props.errorMsg.username;
      }
    }
    else {
      errorBackend = "Error occurred. Please try again."
    }

    // console.log(this.state.responseError);

    return (
      <Layout>
        <div id="add-person">
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit} id="add-person-form">

            <div id="error-msg">
              <div>{(this.submit && this.state.responseError) ? errorBackend : ""}</div>
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
      </Layout>
    );
  }
};

const mapStateToProps = state => {
  const currentState = state.customerReducer[state.customerReducer.length - 1]
  return {
    login: currentState.login,
    customer: currentState.customer,
    errorMsg: currentState.errorMsg
  }
}

export default connect(mapStateToProps, null)(SignUp)
