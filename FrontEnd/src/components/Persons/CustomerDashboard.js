import React, { Component } from 'react'
import { connect } from "react-redux"
import CustomerDashboardColumn from './CustomerDashboardColumn';
import './Dashboard.css';
import BookingHistory from './BookingHistory';

class CustomerDashboard extends Component {

  render() {
    var selected = "";

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
  const currentBookingState = state.bookingReducer[state.bookingReducer.length - 1];
  
  return {
    booked: currentBookingState.booked
  }
}

export default connect(mapStateToProps, null)(CustomerDashboard);