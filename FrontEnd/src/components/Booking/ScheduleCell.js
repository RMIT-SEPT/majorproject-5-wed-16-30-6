import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';

class ScheduleCell extends Component {

  /**
   * get hour label for cells
   */
  getHourLabel(hours) {
    var ampm = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours + ampm;
  }

  handleClick = () => {
    this.props.history.push({
      pathname: "/bookingForm",
      state: {
        scheduleId: this.props.scheduleId,
        startTime: this.getHourLabel(this.props.startTime),
        endTime: this.getHourLabel(this.props.endTime),
        date: this.props.date,
        businessId: this.props.businessId,
        workerIds: this.props.workerId
      }
    });
  }

  render() {
    // return available cell
    if (this.props.isAvailable) {
      return (
        <div className='schedule-cell' onClick={this.handleClick}>
          <div>
            {this.getHourLabel(this.props.startTime)}
            <span> - </span>
            {this.getHourLabel(this.props.endTime)}
          </div>
        </div>
      )
    }
    else {
      // return unavailable cell
      return (
          <div className='schedule-cell-unavailable'>
          <div>{this.getHourLabel(this.props.startTime)}</div>
          </div>
      )
    }
  }
}

ScheduleCell.propTypes = {
  startTime: PropTypes.number.isRequired,
  endTime: PropTypes.number,
  isAvailable: PropTypes.bool.isRequired
}

export default withRouter(ScheduleCell);
