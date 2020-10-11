import React, { Component } from 'react'
import { connect } from "react-redux"
import CustomerDashboardColumn from './CustomerDashboardColumn';
import './Dashboard.css';
import BookingHistory from './BookingHistory';
import { Redirect } from 'react-router-dom';

class CustomerDashboard extends Component {

  render() {
    if (!this.props.login) {
      return <Redirect to="/home" />
    }

    var selected = "profile";

    // redirected from booking page
    if (this.props.booked) {
      selected = "booking_history";
    }

    // if redirected from dashboard option
    if (this.props.location.state) {
      selected = this.props.location.state.selected;
    }
    
    const { params } = this.props.match;
    const id = parseInt(params.id);

    return (
      
      <div className="dashboard">
        <CustomerDashboardColumn id={id} />

        <div>
          Customer ID: {id}
        
          {selected === "booking_history" &&
            <BookingHistory />
          }

          {selected === "cancel_booking" &&
            <div>Cancel Booking</div>
          }

          {selected === "profile" &&
            <div>Customer Profile</div>
          }

          {selected === "edit_profile" &&
            <div>Edit Profile</div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const currentState = state.loginReducer[state.loginReducer.length - 1];
  const currentBookingState = state.bookingReducer[state.bookingReducer.length - 1];

  
  return {
    login: currentState.login,
    person: currentState.person,
    booked: currentBookingState.booked
  }
}

export default connect(mapStateToProps, null)(CustomerDashboard);
