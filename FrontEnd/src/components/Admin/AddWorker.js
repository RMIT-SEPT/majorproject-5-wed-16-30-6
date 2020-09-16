import React, { Component } from 'react'
import { connect } from "react-redux";
import { addWorker } from '../../actions/adminActions';
import './Admin.css';
import "bootstrap/dist/css/bootstrap.min.css"
import EditWorker from './EditWorker';

class AddWorker extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      personId: "",
      desc: "",
      mobile: "",
      startDate: "",
      endDate: ""
    }

    this.valid = {
      name: false,
      personId: false,
      desc: false,
      mobile: false,
      startDate: false,
      endDate: false
    }

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
  setValidPersonId() {
    this.valid.personId = (this.state.personId.length >= 4 && this.state.personId.length <= 5);
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
    this.setValidPersonId();
    this.setValidMobile();

    const errorMsg = {
      name: "Name is empty.",
      personId: "Person ID is invalid.",
      desc: "Description is empty",
      mobile: "Mobile number is invalid.",
      startDate: "Start date is invalid.",
      endDate: "End date is invalid."
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

  // when submit button is clicked
  handleSubmit(event) {
    event.preventDefault();
    this.submit = false;
    
    // break if any input is invalid
    if (!this.validateForm()) { return }

    // send state data to backend
    this.props.dispatch(addWorker(this.state));

    this.submit = true;
    this.setState({
      name: "",
      personId: "",
      desc: "",
      mobile: "",
      startDate: "",
      endDate: ""
    });
  }

  render() {
    // const { params } = this.props.match;
    // const id = parseInt(params.id);

    if (this.props.addWorkerSuccess && this.submit) {
      return <EditWorker createdUser={this.props.worker.name}/>
    }

    const {name, personId, desc, mobile, startDate, endDate} = this.state;
    var errorBackend = "";
    if (this.props.errorMsg) {
      if (this.props.errorMsg.personIdentifier) {
        errorBackend = this.props.errorMsg.personIdentifier;
      }
    }
    else {
      errorBackend = "Error occurred. Please try again."
    }

    return (
      <div id="add-worker">
        <h2>Register Worker</h2>
        <form onSubmit={this.handleSubmit} id="add-worker-form">

          <div id="error-msg">
            <div>{(this.submit && !this.props.addWorkerSuccess) ? errorBackend : ""}</div>
            <div id="name-error"></div>
            <div id="personId-error"></div>
            <div id="mobile-error"></div>
            <div id="desc-error"></div>
            <div id="startDate-error"></div>
            <div id="endDate-error"></div>
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
            <label htmlFor="personId">Person Identifier: </label>
            <div className="input-msg">*Required - Please enter 4 to 5 characters</div>
            <input
              type="text"
              value={personId}
              className="personId"
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

          <div className="inputWrapper">
            <label htmlFor="desc">Description: </label>
            <div className="input-msg">*Required</div>
            <textarea
              type="text"
              value={desc}
              className="desc"
              onChange={this.handleChange}
            >
            </textarea>
          </div>

          <div className="inputWrapper">
            <label htmlFor="startDate">Start Date: </label>
            <input 
              name="date" 
              type="date" 
              value={startDate}
              className="startDate"
              onChange={this.handleChange}
            />
           
            <label htmlFor="endDate">End Date: </label>
            <input 
              name="date" 
              type="date" 
              value={endDate}
              className="endDate"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" value="Save">Save</button>
        </form>
      </div>
    );
  }
};

/**
 * provide addWorkerSuccess prop to the AddWorker component
 * which indicates whether submission has succeeded
 * @param {*} state 
 */
const mapStateToProps = state => {
  const currentState = state.workerReducer[state.workerReducer.length - 1]
  return {
    addWorkerSuccess: currentState.addWorkerSuccess,
    worker: currentState.worker,
    errorMsg: currentState.errorMsg
  }
}

export default connect(mapStateToProps, null)(AddWorker)