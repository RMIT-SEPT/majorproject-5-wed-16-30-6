import React, { Component } from 'react'
import './Dashboard.css';
import { getSchedules } from '../../actions';
import { connect } from "react-redux";
import WorkerScheduleCell from './WorkerScheduleCell';

class WorkerProfile extends Component {

  /* call the API immediately after the components are rendered */
  componentDidMount() {
    const id = this.props.id;
    const param = { businessId: id };
    this.props.dispatch(getSchedules(param));
  }

  getWorkerSchedules() {
    const workerId = this.props.id;
    var schedules = [];

    this.props.timeslots.forEach(timeslot => {
      if (timeslot.workerId === workerId) {
        schedules.push(timeslot);
      }
    });

    return schedules;
  }

  getWorkerScheduleCells() {
    var cells = [];
    var schedules = this.getWorkerSchedules();

    schedules.forEach(schedule => {
      const date = new Date(schedule.startDateTime).toLocaleDateString();
      const startDateTime = new Date(schedule.startDateTime).toLocaleTimeString();
      const endDateTime = new Date(schedule.endDateTime).toLocaleTimeString();

      var cell = <WorkerScheduleCell date={date} startDateTime={startDateTime} endDateTime={endDateTime} />
      cells.push(cell);
    })

    return cells;
  }

  render() {
    return (
      <div className="dashboard-contents">
        <h2>Worker Profile</h2>
        <div className='profile-container'>
          {this.getWorkerScheduleCells()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const currentState = state.schedules[state.schedules.length - 1]
  return {
    timeslots: currentState.timeslots
  }
}

export default connect(mapStateToProps, null)(WorkerProfile);