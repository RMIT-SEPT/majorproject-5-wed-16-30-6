import React, { Component } from 'react'

class DateCell extends Component {
  render() {
    return (
      <div className="days-header-cell">
        <div>{this.props.date}</div>
        <div>{this.props.day}</div>
      </div>
    )
  }
}

export default DateCell;
