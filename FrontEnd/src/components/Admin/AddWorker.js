import React, { Component } from 'react'
import { connect } from "react-redux";
import { addWorker, POST_WORKER_FAILURE } from '../../actions/adminActions';
import './Admin.css';
import "bootstrap/dist/css/bootstrap.min.css"


class AddWorker extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      personId: "",
      desc: "",
      mobile: "",
      startDate: "",
      endDate: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.className]: event.target.value
    });
  }

  existEmptyField() {
    var existingEmptyField = false
    Object.keys(this.state).forEach(key => {
      // remove empty space before and after the input string
      if (!this.state[key].trim()) {
        existingEmptyField = true;
      }
    });

    return existingEmptyField;
  }

  // return true if person id is 4 or 5 characters
  validatePersonId() {
    return (this.state.personId.length >= 4 && this.state.personId.length <= 5);
  }

  // return true if mobile number is 10 characteres
  validateMobile() {
    return (this.state.mobile.length == 10);
  }

  handleSubmit(event) {
    event.preventDefault();

    // if empty field exists
    if (this.existEmptyField()) {
      document.getElementById('error-msg').innerHTML = "Ensure all fields are completed.";
      return;
    }

    // validate fields requirements
    if (!this.validatePersonId() || !this.validateMobile()) {
      return;
    }

    this.props.dispatch(addWorker(this.state));

    this.setState({
      name: "",
      personId: "",
      desc: "",
      mobile: "",
      startDate: "",
      endDate: ""
    });
  }

  // called after render()
  componentDidUpdate() {
    if (this.props.addWorkerSuccess) {
      this.props.history.push("/admin/editworker")  
    }
  }

  render() {
    const {name, personId, desc, mobile, startDate, endDate} = this.state;
    
    return (
      <div id="add-worker">
        <h2>Register Worker</h2>
        
        <form onSubmit={this.handleSubmit} id="add-worker-form">
          <div id="error-msg"></div>
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

          
          <button type="submit" value="Add Worker">Add Worker</button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {
  const currentState = state[state.length - 1]
  return {
    addWorkerSuccess: currentState.addWorkerSuccess
  }
}

export default connect(mapStateToProps, null)(AddWorker)