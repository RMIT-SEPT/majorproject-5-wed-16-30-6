import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ScheduleCell extends Component {
  render() {

    if (!this.props.isAvailable) {
      var hours = this.props.startDateTime;
      var ampm = hours >= 12 ? ' PM' : ' AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      var hoursStr = hours + ampm;

      return (
        <div className='schedule-cell-unavailable'>
          <div>{hoursStr}</div>
        </div>
      )
    }
    else {
      return (
        <div className='schedule-cell'>
          <div><span>Start: </span>{this.props.startDateTime}</div>
          <div><span>End: </span>{this.props.endDateTime}</div>
        </div>
      )
    }

   
  }
}

ScheduleCell.propTypes = {
  schedules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.object.isRequired,
      businessId: PropTypes.object.isRequired,
      workerId: PropTypes.object.isRequired,
      startDateTime: PropTypes.string.isRequired,
      endDateTime: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default ScheduleCell;
