import React, { Component } from 'react'
import CustomerDashboardColumn from './CustomerDashboardColumn';
import './Dashboard.css';
import BookingHistory from './BookingHistory';

class CustomerDashboard extends Component {

  render() {
    var selected = "";

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

export default CustomerDashboard;