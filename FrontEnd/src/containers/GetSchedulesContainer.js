import { connect } from 'react-redux'
import Schedule from '../components/BusinessSchedule/Schedule'
import { getSchedules } from '../actions'

/**
 * return 'schedules' that is to be given to Schedule
 * @param {*} state 
 */
const mapStateToProps = (state) => {
  const length = state.schedules.length
  const currentState = state.schedules[length - 1]  // the newest state

  var current = new Date("2020-08-16");
  /* get dates of the next 7 days */
  var dates = [];
  for (var i = 0; i < 7; i++) {
    var copy = new Date(current.getTime());
    dates.push(copy);
    current.setDate(current.getDate() + 1);
  }

  /* each date may have multiple timeslots */
  const datesWithSlots = dates.map(date => {
    /* collect time slots that belong to this date */
    var timeslots = [];
    if (currentState.timeslots) {
      /* array of time slots for the date */
      timeslots = currentState.timeslots.filter(slot => {
        const startDate = new Date(slot.startDateTime);
        return (startDate.toLocaleDateString() === date.toLocaleDateString())
      });
    }

    return {
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      timeslots: timeslots
    }
  });

  return { schedule: datesWithSlots }
}

/**
 * provide function to dispatch getSchedules action as "loadData"
 * which becomes the property of the component Schedule
 * @param {*} dispatch 
 * @param {*} businessId : get schedules of which business
 */
const mapDispatchToProps = (dispatch, businessId) => {
  return {
    loadData: () => dispatch(getSchedules(businessId))
  }
}

const GetSchedules = connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule)

export default GetSchedules;