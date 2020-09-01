import React, { Component } from 'react'
import './BusinessSchedule.css';
import Day from './Day';
import TimeCellList from './TimeCellList';
import DaysHeader from './DaysHeader';

class Schedule extends Component {

  /* call the API immediately after the components are rendered */
  componentDidMount() {
    const { loadData } = this.props;
    loadData();
  }

  /**
   * get Day components for each day in the 'schedule' (i.e., the next seven days) from the API
   */
  getDays() {
    let days = []
    let i = 1;
    this.props.schedule.forEach(day => {
      let id = "day" + i;
      days.push(<Day key={id} timeslots={day.timeslots} id={id} />);
      i++;
    })
    return days;
  }

  render() {
    const firstDateSchedule = this.props.schedule[0];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 
    'November', 'December'];
    
    return (
      <div id="schedule">
        <h3 id="month-year">
          <span>{months[parseInt(firstDateSchedule.month)]}</span>
          <span>{firstDateSchedule.year}</span>
        </h3>
        <div id="schedule-grid">
          <TimeCellList />
          <DaysHeader />          
          {this.getDays()}
        </div>
      </div>
    )
  }
}
export default Schedule;
