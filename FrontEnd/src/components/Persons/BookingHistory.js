import React, { Component } from 'react'
import { connect } from "react-redux"

class BookingHistory extends Component {
  render() {
    return (
      <div>
        <h2>Booking History</h2>
        <div>{this.props.booked && <div>New booking has been confirmed.</div>}</div>
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

export default connect(mapStateToProps, null)(BookingHistory);
