import React, { Component } from 'react'
import './BusinessSchedule.css';
import Day from './Day';
import TimeCellList from './TimeCellList';
import DaysHeader from './DaysHeader';
import Layout from '../Home/Layout';
import PropTypes from 'prop-types'

class Schedule extends Component {

  /* call the API immediately after the components are rendered */
  componentDidMount() {
    const { loadData } = this.props;
    loadData();
  }

  constructor() {
    super();
    this.state = {
      availability: false,
    }
  }

  /**
   * - get Day components for each day in the 'schedule' (i.e., the next seven days) from the API
   * - change the availability (i.e., whether business is available the next 7 days)
   */
  getDaysAndAvailability() {
    let days = []
    let i = 1;

    this.props.schedule.forEach(day => {
      let id = "day" + i;
      let timeslots = day.timeslots;
      days.push(<Day key={id} timeslots={timeslots} id={id} />);

      // change the availability if any of the seven days have timeslots
      if (!this.state.availability && timeslots.length > 0) {
        this.setState({
          availability: true
        });
      }
      
      i++;
    })
    return days;
  }

  render() {
    const firstDateSchedule = this.props.schedule[0];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 
    'November', 'December'];
    const days = this.getDaysAndAvailability();
    
    return (
      <Layout>
        <div id="schedule">
          <h1 id="booking-business-title">Business Name {this.props.businessId} Booking</h1>
          <h3 id="month-year">
            <span>{months[parseInt(firstDateSchedule.month)]}</span>
            <span>{firstDateSchedule.year}</span>
          </h3>

          {!this.state.availability &&
            <h5 id="unavailable-msg">No times available.</h5>
          }

          <div id="schedule-grid">
            <TimeCellList />
            <DaysHeader />
            {days}
          </div>
        </div>
      </Layout>
    )
  }
}

Schedule.propTypes = {
  schedule: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      month: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
      timeslots: PropTypes.array.isRequired,
    }).isRequired
  ).isRequired,
  loadData: PropTypes.func.isRequired
}

export default Schedule;
