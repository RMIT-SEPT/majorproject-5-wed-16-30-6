import React, { Component } from 'react'
import { withRouter } from 'react-router';

class AdminDashboardColumn extends Component {

  render() {
    const id = this.props.id;
    const addWorkerPath = "/admin/" + id + "/addworker";
    const editWorkerPath = "/admin/" + id + "/edit/workerschedule";
    const shiftPath = "/admin/" + id + "/edit_shift";
    const summaryPath = "/admin/" + id + "/booking_summary";
    const newBookingsPath = "/admin/" + id + "/new_bookings";
    const viewAvailabilityPath = "/admin/" + id + "/view_availability";

    return (
      <div className="dashboard-column">
        <div
          className="opt"
          onClick={
            () => this.props.history.push({
              pathname: addWorkerPath,
              state: {
                selected: "add_worker"
              }
            })
          }
        >
          Register Worker
        </div>
        <div
          className="opt"
          onClick={
            () => this.props.history.push({
              pathname: editWorkerPath,
              state: {
                selected: "edit_worker"
              }
            })
          }
        >
          Edit Worker
        </div>
        <div
          className="opt"
          onClick={
            () => this.props.history.push({
              pathname: shiftPath,
              state: {
                selected: "add_edit_shift"
              }
            })
          }
        >
          Add/Edit Shift
        </div>
        <div
          className="opt"
          onClick={
            () => this.props.history.push({
              pathname: summaryPath,
              state: {
                selected: "booking_summary"
              }
            })
          }
        >
          Booking Summary
        </div>
        <div
          className="opt"
          onClick={
            () => this.props.history.push({
              pathname: newBookingsPath,
              state: {
                selected: "new_bookings"
              }
            })
          }
        >
          New Bookings
        </div>
        <div
          className="opt"
          onClick={
            () => this.props.history.push({
              pathname: viewAvailabilityPath,
              state: {
                selected: "view_availability"
              }
            })
          }
        >
          View Availability
        </div>
      </div>
    )
  }
}

export default withRouter(AdminDashboardColumn);