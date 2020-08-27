import {connect} from 'react-redux'
import Schedule from '../components/BusinessSchedule/Schedule'
import {getSchedules} from '../actions'

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

  const datesWithItems = dates.map(date => {
    return {
      name: date.getDate() + "th of " + date.getMonth(),
      items: currentState.items.filter(item => {
        var startDate = new Date(item.startDateTime);
        return (startDate.getDate() > date.getDate())
      })    
    }
  });

  return { schedule: datesWithItems }  // return items
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(getSchedules()),
  }
}

const GetSchedules = connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule)

export default GetSchedules;