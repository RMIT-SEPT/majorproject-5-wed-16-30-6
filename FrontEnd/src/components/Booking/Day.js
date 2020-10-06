import React, { Component } from 'react'
import ScheduleCell from './ScheduleCell'
import PropTypes from 'prop-types'

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

      // date of the slot
      const dateStr = new Date(timeslot.startDateTime).toLocaleDateString();

      cellsDict[startTimeHour] = 
        <ScheduleCell
          key={timeslot.id}
          scheduleId={timeslot.id}
          startTime={startTimeHour}
          endTime={endTimeHour}
          date={dateStr}
          businessId={timeslot.businessId}
          isAvailable={true}
        />;
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
    for (var slotTime = firstSlotTime; slotTime <= lastSlotTime; slotTime++) {
      if (!cellsDict[slotTime]) {
        cellsDict[slotTime] = 
        <ScheduleCell 
          key={"n" + slotTime} 
          startTime={slotTime} 
          isAvailable={false} 
        />
      }
    }
  }

  /**
   * get all ScheduleCells for the day 
   */
  getScheduleCells() {
    // dictionary to store key: start time and value: schedule cell
    var cellsDict = {}
    this.assignAvailableScheduleCells(cellsDict);
    this.assignUnavailableScheduleCells(cellsDict);

    // get a schedule cell for each slot time
    var cells = []; 

    for (let key in cellsDict) {
      cells.push(cellsDict[key])
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

Day.propTypes = {
  timeslots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      businessId: PropTypes.number.isRequired,
      workerId: PropTypes.number.isRequired,
      startDateTime: PropTypes.string.isRequired,
      endDateTime: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Day;