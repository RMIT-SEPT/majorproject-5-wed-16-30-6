import React, { Component } from 'react'
import './BusinessSchedule.css';
import Day from './Day';
import TimeCellList from './TimeCellList';
import DaysHeader from './DaysHeader';


class Schedule extends Component {

  /* call the API after the components are rendered */
  componentDidMount() {
    const { loadData } = this.props;
    loadData();
  }

  constructor() {
    super();
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 
    'November', 'December'];
  }

  render() {
    /* show above the schedules */
    const currentMonthStr = this.months[parseInt(this.props.schedule[0].month)];  
    const currentYear = this.props.schedule[0].year;
    var days = []
    var i = 1;
    this.props.schedule.forEach(day => {
      var id = "day" + i;
      days.push(<Day key={id} timeslots={day.timeslots} id={id} />);
      i++;
    })

    return (
      <div id="schedule">
        <h3 id="month-year">{currentMonthStr} {currentYear}</h3>
        <div id="schedule-grid">
          <TimeCellList />
          <DaysHeader />          
          {days}
        </div>
      </div>
    )
  }
}
export default Schedule;
