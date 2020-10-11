import React, { Component } from 'react'

class BookingSummary extends Component {
  render() {
    return (
      <div>
        <div>Admin ID: {this.props.id}</div>
        <h3>Booking Summary</h3>
      </div>
    )
  }
}

export default BookingSummary;
