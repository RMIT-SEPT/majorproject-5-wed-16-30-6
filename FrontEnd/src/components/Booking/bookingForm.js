import React, { Component } from 'react';
import { connect } from "react-redux";
import "./bookingForm.css"
import LoginSignupPrompt from './LoginSignupPrompt';
import { bookService } from '../../actions/bookingActions';
import { Redirect } from 'react-router-dom';
import Layout from '../Home/Layout';


class bookingForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedWorkerId: ""
    }

    this.submit = false;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.selectedWorkerId) {
      return;
    }

    this.submit = true;

    // send booking data to backend
    this.props.dispatch(bookService(this.props.location.state.scheduleId, this.props.person.id, this.state.selectedWorkerId));
  }

  handleChange(event) {
    var newState = this.state;
    newState.selectedWorkerId = event.target.value;
    this.setState(newState);
  }

  getWorkerNames() {
    const workerIds = this.props.location.state.workerIds;
    const workers = this.props.workers;
    let workerNameCells = [];

    workerIds.forEach(workerId => {
      const worker = workers.find(
        (x) => { 
          return x.id === workerId;
        }
      );

      workerNameCells.push(
        <div key={workerId}>
          <input 
            type="radio" name="worker" value={workerId}
            onChange={this.handleChange}
          /> {worker.name}
        </div>
      )
    })

    return workerNameCells;
  }

  render() {
    const login = this.props.login;

    // if booking succeeded
    if (this.props.booked && this.submit) {
      const path = "/user/" + this.props.person.id + "/booking_history";
      this.submit = false;
      return <Redirect to={path} />;
    }

    return (
      <Layout>
      <div className="container">
        <h1 id="booking-form-title">Booking Form</h1>

        {!login && <LoginSignupPrompt />}

        {login && this.props.person &&
          <div>
            <div className="booking-info">
              <div>Customer Name: {this.props.person.name}</div>
              <div>Phone: {this.props.person.mobileNum}</div>
              <div>Service: {this.props.location.state.businessId}</div>
              <div>Date: {this.props.location.state.date}</div>
              <div>Time: {this.props.location.state.startTime} - {this.props.location.state.endTime}</div>
              <div>Worker:</div>
              {this.getWorkerNames()}
                
              <div>Would you like to confirm the booking?</div>
            </div>

            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="submit" value="Confirm" />
              <button
                onClick={() => this.props.history.push("business/" + this.props.location.state.businessId + "/schedule")}
                className="cancel"
              >Cancel
            </button>
            </form>
          </div>
        }
      </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  const currentLoginState = state.loginReducer[state.loginReducer.length - 1];
  const currentBookingState = state.bookingReducer[state.bookingReducer.length - 1];
  const currentScheduleState = state.schedules[state.schedules.length - 1];
  
  return {
    login: currentLoginState.login,
    person: currentLoginState.person,
    booked: currentBookingState.booked,
    booking: currentBookingState.booking,
    errorMsg: currentBookingState.errorMsg,
    workers: currentScheduleState.workers
  }
}

export default connect(mapStateToProps, null)(bookingForm);
