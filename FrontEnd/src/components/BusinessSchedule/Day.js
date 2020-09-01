import React, { Component } from 'react'
import ScheduleCell from './ScheduleCell'

class Day extends Component {

  /**
   * assign available ScheduleCells to the dictionary
   * key: each slot time
   * value: array of ScheduleCells for the slot time
   * @param {*} cellsDict 
   */
  assignAvailableScheduleCells(cellsDict) {
    // create ScheduleCells that correspond to each timeslot of the day
    this.props.timeslots.forEach(timeslot => {
      const startDateTimeStr = new Date(timeslot.startDateTime).toLocaleTimeString();
      const endDateTimeStr = new Date(timeslot.endDateTime).toLocaleTimeString();

      // start and end time (e.g., 9, 10, 13, etc)
      const startTimeHour = parseInt(startDateTimeStr.slice(0, 2));
      const endTimeHour = parseInt(endDateTimeStr.slice(0, 2));

      // e.g., if the timeslot is from 9:00 - 11:00, 
      //two time slots are created (9 - 10, 10 - 11)

      for (let slotTime = startTimeHour; slotTime < endTimeHour; slotTime++) {
        // array of ScheduleCells for the slot time
        var cells = [];
        if (cellsDict[slotTime]) {
          cells = cellsDict[slotTime];
        }

        // add ScheduleCell to the slot time
        cells.push(
          <ScheduleCell
            key={slotTime}
            startDateTime={slotTime}
            endDateTime={slotTime + 1}
            isAvailable={true}
          />
        )

        cellsDict[slotTime] = cells;
      }
    })
  }

  /**
   * assign unavailable ScheduleCells to the dictionary
   * key: each slot time
   * value: ScheduleCell for the slot time
   * @param {*} cellsDict
   */
  assignUnavailableScheduleCells(cellsDict) {
    // 13 time slots per day
    const firstSlotTime = 9;
    const lastSlotTime = 21;

    // assign unavailable cells
    for (var i = firstSlotTime; i <= lastSlotTime; i++) {
      if (!cellsDict[i]) {
        cellsDict[i] = <ScheduleCell key={i} startDateTime={i} isAvailable={false} />
      }
    }
  }

  /**
   * get all ScheduleCells for the day 
   */
  getScheduleCells() {
    var cellsDict = {}
    this.assignAvailableScheduleCells(cellsDict);
    this.assignUnavailableScheduleCells(cellsDict);

    // get a schedule cell for each slot time
    var cells = []; 
    for (let key in cellsDict){
      if (cellsDict[key] instanceof Array) {
        cells.push(cellsDict[key][0])
      }
      else {
        cells.push(cellsDict[key])
      }
    }
    return cells;
  }

  render() {
    return (
      <div id={this.props.id}>
        {this.getScheduleCells()}
      </div>
    )
  }
}

export default Day;