import React, { Component } from 'react'
import ScheduleCell from './ScheduleCell'
import PropTypes from 'prop-types'

class Day extends Component {

  /**
   * convert timeslots to dictionary of each slot information 
   */
  getSlotsInfoDict() {
    // 13 time slots per day
    const firstSlotTime = 9;
    const lastSlotTime = 21;

    var slotsInfoDict = {};
    
    // initialise slotsInfoDict; each key has an empty array (of slots)
    for (var slotTime = firstSlotTime; slotTime <= lastSlotTime; slotTime++) {
      slotsInfoDict[slotTime] = [];
    }

    // create ScheduleCells that correspond to each timeslot of the day
    this.props.timeslots.forEach(timeslot => {
      const startDateTimeStr = new Date(timeslot.startDateTime).toLocaleTimeString();
      const endDateTimeStr = new Date(timeslot.endDateTime).toLocaleTimeString();

      // start and end time (e.g., 9, 10, 13, etc)
      const startTimeHour = parseInt(startDateTimeStr.slice(0, 2));
      const endTimeHour = parseInt(endDateTimeStr.slice(0, 2));

      // date of the slot
      const dateStr = new Date(timeslot.startDateTime).toLocaleDateString();

      slotsInfoDict[startTimeHour].push({
        key: timeslot.id,
        scheduleId: timeslot.id,
        startTime: startTimeHour,
        endTime: endTimeHour,
        date: dateStr,
        businessId: timeslot.businessId,
        isAvailable: true,
        workerId: timeslot.workerId
      })
    })

    return slotsInfoDict;
  }

  /**
   * assign unavailable ScheduleCells to the dictionary
   * key: each slot time
   * value: ScheduleCell for the slot time
   * @param {*} cellsDict
   */
  getUnavailableScheduleCells(cellsDict) {
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
   * convert the dictionary of each time slot information into available schedule cells.
   * returns the dictionary of available cells
   */
  getAvailableScheduleCells() {
    // dictionary - key: start time, value: array of each slot info
    var slotsInfoDict = this.getSlotsInfoDict();

    // // dictionary - key: start time, value: schedule cell
    var cellsDict = {}

    for (let key in slotsInfoDict) {
      // array of slot info per time slot
      let slotsInfoOfSameTime = slotsInfoDict[key];

      if (slotsInfoOfSameTime.length > 0) {
        let firstSlotInfo = slotsInfoOfSameTime[0];
  
        let workers = slotsInfoOfSameTime.map(slotInfo => {
          return slotInfo.workerId
        });

        var cell =
          <ScheduleCell
            key={firstSlotInfo.key}
            scheduleId={firstSlotInfo.scheduleId}
            startTime={firstSlotInfo.startTime}
            endTime={firstSlotInfo.endTime}
            date={firstSlotInfo.date}
            businessId={firstSlotInfo.businessId}
            isAvailable={true}
            workerId={workers}
          />;
  
        cellsDict[key] = cell;
      }
    }

    return cellsDict;
  }

  /**
   * get all ScheduleCells for the day 
   */
  getScheduleCells() {

    var cellsDict = this.getAvailableScheduleCells();

    // dictionary to store key: start time and value: schedule cell
    this.getUnavailableScheduleCells(cellsDict);

    // get a schedule cell for each slot time
    var cells = [];

    for (let key in cellsDict) {
      cells.push(cellsDict[key]);
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