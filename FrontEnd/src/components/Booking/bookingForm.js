import React, { Component } from 'react';
import { connect } from "react-redux";
import "./bookingForm.css"
import LoginSignupPrompt from './LoginSignupPrompt';
import { bookService } from '../../actions/bookingActions';
import { Redirect } from 'react-router-dom';

class bookingForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedWorkerId: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.selectedWorkerId) {
      return;
    }

    // send booking data to backend
    this.props.dispatch(bookService(this.props.location.state.scheduleId, this.props.customer.id, this.state.selectedWorkerId));
  }

  handleChange(event) {
    var newState = this.state;
    newState.selectedWorkerId = event.target.value;
    this.setState(newState);
  }

  getWorkerNames() {
    const workerIds = this.props.location.state.workerIds;
    let workerNameCells = [];

    workerIds.forEach(workerId => {
      workerNameCells.push(
        <div key={workerId}>
          <input 
            type="radio" name="worker" value={workerId}
            onChange={this.handleChange}
          /> Worker {workerId}
        </div>
      )
    })

    return workerNameCells;
  }

  render() {
    const login = this.props.login;

    // if booking succeeded
    if (this.props.booked) {
      return <Redirect to="/booking/success" />;
    }

    return (
      <div className="container">
        <h1>Booking Form</h1>

        {!login && <LoginSignupPrompt />}

        {login && this.props.customer &&
          <div>
            <div className="booking-info">
              <div>Customer Name: {this.props.customer.name}</div>
              <div>Phone: {this.props.customer.mobileNum}</div>
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
                onClick={() => this.props.history.push("business/schedule/" + this.props.location.state.businessId)}
                className="cancel"
              >Cancel
            </button>
            </form>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const currentCustState = state.customerReducer[state.customerReducer.length - 1];
  const currentBookingState = state.bookingReducer[state.bookingReducer.length - 1];
  
  return {
    login: currentCustState.login,
    customer: currentCustState.customer,
    booked: currentBookingState.booked,
    booking: currentBookingState.booking,
    errorMsg: currentBookingState.errorMsg
  }
}

export default connect(mapStateToProps, null)(bookingForm);
