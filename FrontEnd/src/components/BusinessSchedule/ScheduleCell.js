import React, { Component } from 'react'

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

  render() {
    // return available ScheduleCells
    if (this.props.isAvailable) {
      return (
        <div className='schedule-cell'>
          <div>
            {this.getHourLabel(this.props.startDateTime)}
            <span> - </span>
            {this.getHourLabel(this.props.endDateTime)}
          </div>
        </div>
      )
    }
    else {
      // return unavailable ScheduleCells
      return (
        <div className='schedule-cell-unavailable'>
          <div>{this.getHourLabel(this.props.startDateTime)}</div>
        </div>
      )
    }
  }
}

export default ScheduleCell;
