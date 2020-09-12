import React, { Component } from 'react'
import { connect } from "react-redux";
import { addWorker, POST_WORKER_FAILURE } from '../../actions/adminActions';
import './Admin.css';

class AddWorker extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      mobile: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.className]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    if (!this.state.name.trim() || !this.state.mobile.trim()) {
      return;
    }

    this.props.dispatch(addWorker(this.state.name.value, this.state.mobile.value));
    
    this.setState({
      name: "",
      mobile: ""
    });
  }

  // called after render()
  componentDidUpdate() {
    if (this.props.addWorkerSuccess) {
      this.props.history.push("/admin/editworker")  
    }
  }

  render() {
    const {name, mobile} = this.state;

    return (
      <div id="add-worker">
        <h2>Register Worker</h2>
        <form onSubmit={this.handleSubmit} id="add-worker-form">
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              value={name}
              className="name"
              onChange={this.handleChange} 
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile Number: </label>
            <input
              type="text"
              value={mobile}
              className="mobile"
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