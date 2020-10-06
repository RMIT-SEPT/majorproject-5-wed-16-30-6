import React, { Component } from 'react';
import { connect } from "react-redux";
import "./bookingForm.css"
import LoginSignupPrompt from './LoginSignupPrompt';
import { bookService } from '../../actions/bookingActions';
import { Redirect } from 'react-router-dom';

class bookingForm extends Component {

  handleSubmit(e) {
    e.preventDefault();

    // send data to backend
    this.props.dispatch(bookService(this.props.customer.id, this.props.location.state.scheduleId));
  }

  render() {
    // const login = this.props.login;
    // console.log(this.props.login);
    var login = true;

    if (this.props.booking) {
      // if the selected schedule (timeslot) is successfully booked
      if (this.props.booking.id === this.props.location.state.scheduleId) {
        // TODO: create this page
        return <Redirect to="/booking/success" />;
      }
    }

    return (
      <div className="container">
        <h1>Booking Form</h1>

        {!login && <LoginSignupPrompt />}

        {login && 
          <div>
            <div className="booking-info">
              <div>Customer Name: {this.props.customer.name}</div>
              <div>Phone: {this.props.customer.mobileNum}</div>
              <div>Service: {this.props.location.state.businessId}</div>
              <div>Date: {this.props.location.state.date}</div>
              <div>Time: {this.props.location.state.startTime} - {this.props.location.state.endTime}</div>
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

  console.log(currentBookingState);
  
  return {
    login: currentCustState.login,
    customer: currentCustState.customer,
    booking: currentBookingState.booking
  }
}

export default connect(mapStateToProps, null)(bookingForm);
