import React, { Component } from 'react'

class WorkerScheduleCell extends Component {
  render() {
    return (
      <div className='worker-schedule-cell'>
        <div>
          Date: {this.props.date}
        </div>
        <div>
          Start Time: {this.props.startDateTime}
        </div>
        <div>
          End Time: {this.props.endDateTime}
        </div>
      </div>
    )
  }
}

export default WorkerScheduleCell;
