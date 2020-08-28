import React, { Component } from 'react'
import ScheduleCell from './ScheduleCell'

class Day extends Component {
  render() {

    /* 13 time slots per day */
    const firstSlotTime = 9;
    const lastSlotTime = 21;
    var allCells = {}
    
    this.props.timeslots.forEach(timeslot => {
      const startDateTimeStr = new Date(timeslot.startDateTime).toLocaleTimeString()
      const endDateTimeStr = new Date(timeslot.endDateTime).toLocaleTimeString()

      // start time (hour) e.g., 9, 10, 13, etc
      const startTimeHour = parseInt(startDateTimeStr.slice(0, 2))

      allCells[startTimeHour] =
        <ScheduleCell
          startDateTime={startDateTimeStr}
          endDateTime={endDateTimeStr}
          isAvailable={true}
        />
    })

    // create unavailable cells
    for (var i = firstSlotTime; i <= lastSlotTime; i++) {
      if (!allCells[i]) {
        allCells[i] =
          <ScheduleCell
            startDateTime={i}
            isAvailable={false}
          />
      }
    }

    var toShow = [];
    for (var key in allCells){
      toShow.push(allCells[key])
    }

    return (
      <div id={this.props.id}>
        
        { toShow }

      </div>

    )
  }
}

export default Day;
