import React, { Component } from 'react'
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'

class BookingConfirmation extends Component {
  render() {
    // redirect to home if unauthorised
    if (!this.props.booked) {
      return <Redirect to="/home" />
    }

    return (
      <div>
        <ul>
          <li>ID: {this.props.booking.id}</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const currentBookingState = state.bookingReducer[state.bookingReducer.length - 1];
  
  return {
    booked: currentBookingState.booked,
    booking: currentBookingState.booking
  }
}

export default connect(mapStateToProps, null)(BookingConfirmation);